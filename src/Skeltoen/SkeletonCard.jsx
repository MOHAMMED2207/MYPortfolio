// SkeletonCard.jsx
import React from "react";
import "./skeleton.css"; // سنضيف الأنماط هنا

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image shimmer" />
      <div className="skeleton-text shimmer" />
      <div className="skeleton-subtext shimmer" />
      <div className="skeleton-footer shimmer" />
    </div>
  );
};

export default SkeletonCard;
