// FIN.jsx
import React, { useState, useEffect } from "react";
import "../styles/EmailListing.css";

const EmailListing = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [submittedEmails, setSubmittedEmails] = useState([]);

  // Load stored emails from localStorage on component mount
  useEffect(() => {
    const stored = localStorage.getItem("fin_newsletter_emails");
    if (stored) {
      try {
        setSubmittedEmails(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse stored emails");
      }
    }
  }, []);

  // Save to localStorage whenever submittedEmails changes
  useEffect(() => {
    localStorage.setItem(
      "fin_newsletter_emails",
      JSON.stringify(submittedEmails),
    );
  }, [submittedEmails]);

  // Helper to show toast notification
  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  // Email validation regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Check if email already exists in submitted list
  const isDuplicateEmail = (email) => {
    return submittedEmails.some(
      (item) => item.email.toLowerCase() === email.toLowerCase(),
    );
  };

  const sendEmailNotification = async (email) => {
    
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`[Email Notification] New subscriber: ${email}`);
        resolve(true);
      }, 500);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim email to remove whitespace
    const trimmedEmail = email.trim();

    // Validation: empty email
    if (!trimmedEmail) {
      showToast("Please enter an email address", "error");
      return;
    }

    // Validation: invalid email format
    if (!isValidEmail(trimmedEmail)) {
      showToast(
        "Please enter a valid email address (e.g., name@example.com)",
        "error",
      );
      return;
    }

    // Validation: duplicate email
    if (isDuplicateEmail(trimmedEmail)) {
      showToast("This email is already subscribed to our newsletter!", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      // Store the email with timestamp
      const newSubscription = {
        email: trimmedEmail,
        subscribedAt: new Date().toISOString(),
      };

      // Update state (will trigger localStorage update via useEffect)
      setSubmittedEmails((prev) => [...prev, newSubscription]);

      // Send email notification (optional, will not block success message)
      sendEmailNotification(trimmedEmail).catch(console.error);

      // Show success message
      showToast(
        `Success! ${trimmedEmail} has been subscribed to FIN newsletter.`,
        "success",
      );

      // Clear input field
      setEmail("");
    } catch (error) {
      console.error("Submission error:", error);
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close toast on click (optional)
  const handleToastClick = () => {
    setToast({ show: false, message: "", type: "" });
  };

  return (
    <div className="fin-container">
      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fin-toast fin-toast-${toast.type}`}
          onClick={handleToastClick}
        >
          <span className="fin-toast-message">{toast.message}</span>
          <button className="fin-toast-close" aria-label="Close notification">
            ✕
          </button>
        </div>
      )}

      <div className="fin-card">    
        {/* Title */}
        <h1 className="fin-title">
          <span className="fin-title-main">FIN</span>
          <span className="fin-title-sub">Flowing In Yoruba</span>
        </h1>

        {/* Newsletter Form */}
        <form className="fin-form" onSubmit={handleSubmit}>
          <div className="fin-input-group">
            <input
              type="email"
              className="fin-input"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              aria-label="Email address"
            />
            <button
              type="submit"
              className={`fin-button ${isSubmitting ? "fin-button-loading" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="fin-spinner"></span>
                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </button>
          </div>
        </form>

        {/* Stats / Trust Badge */}
        {/* <div className="fin-stats">
          <div className="fin-stat-item">
            <span className="fin-stat-number">{submittedEmails.length}</span>
            <span className="fin-stat-label">Subscribers</span>
          </div>
          <div className="fin-stat-divider"></div>
          <div className="fin-stat-item">
            <span className="fin-stat-label">No spam, ever</span>
            <span className="fin-stat-label-small">Unsubscribe anytime</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default EmailListing
