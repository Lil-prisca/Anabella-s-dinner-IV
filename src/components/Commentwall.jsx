import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";
import "../style/commentWall.css";

const CommentWall = () => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 10;

  // Load comments
  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    try {
      const snap = await getDocs(collection(db, "comments"));
      const data = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(data.reverse()); // newest first
      setCurrentPage(1);
    } catch (error) {
      console.error("Error loading comments:", error);
    }
  };

  // Submit new comment
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim() || !name.trim()) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "comments"), {
        text: text.trim(),
        name: name.trim(),
        timestamp: serverTimestamp(),
      });

      setText("");
      setName("");
      await loadComments();
      alert("Comment posted! ✨");
    } catch (error) {
      console.error("Error:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(comments.length / commentsPerPage);
  const startIndex = (currentPage - 1) * commentsPerPage;
  const endIndex = startIndex + commentsPerPage;
  const currentComments = comments.slice(startIndex, endIndex);

  return (
    <div className="comment-wall">
      <h2 className="cw-title">COMMENT WALL</h2>

      <p className="cw-desc">
        We're so excited ❤️❤️❤️🔥🔥🔥 to see everyone soon!
        <br />
        Please leave a note in our guest book below.
      </p>

      <form className="cw-box" onSubmit={handleSubmit}>
        <input
          type="text"
          className="cw-input"
          placeholder="Add a comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />

        <input
          type="text"
          className="cw-input"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <div className="cw-actions">
          <button type="submit" className="cw-btn" disabled={loading}>
            {loading ? "POSTING..." : "POST"}
          </button>
        </div>
      </form>

      <ul className="comments-list">
        {currentComments.length > 0 ? (
          currentComments.map((c) => (
            <li key={c.id} className="comment-item">
              <strong className="comment-name">{c.name}</strong>
              <p className="comment-text">{c.text}</p>
            </li>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#999" }}>
            No comments yet. Be the first!
          </p>
        )}
      </ul>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="page-btn"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            ← PREVIOUS
          </button>

          <span className="page-info">
            Page {currentPage} of {totalPages}
          </span>

          <button
            className="page-btn"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            NEXT →
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentWall;
