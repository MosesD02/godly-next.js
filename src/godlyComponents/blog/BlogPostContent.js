"use client";

import React from "react";
import Link from "next/link";

/**
 * Renders a paragraph with optional internal links.
 * Replaces each link phrase with an actual anchor tag (first occurrence per phrase).
 */
function ParagraphWithLinks({ content, links = [] }) {
  if (!links.length) {
    return (
      <p className="font-['satoshi-light'] text-lg leading-relaxed text-[#312E2C]">
        {content}
      </p>
    );
  }

  // Find all link positions and sort by start index
  const segments = [];
  const linkData = links
    .map(({ phrase, url }) => {
      const pos = content.indexOf(phrase);
      return pos >= 0
        ? { phrase, url, start: pos, end: pos + phrase.length }
        : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.start - b.start);

  // Remove overlaps (take first non-overlapping)
  const filtered = [];
  let lastEnd = 0;
  for (const link of linkData) {
    if (link.start >= lastEnd) {
      filtered.push(link);
      lastEnd = link.end;
    }
  }

  // Build output segments
  let prevEnd = 0;
  const elements = [];
  filtered.forEach(({ phrase, url, start, end }, index) => {
    if (start > prevEnd) {
      elements.push(
        <span key={`t-${index}`}>{content.slice(prevEnd, start)}</span>,
      );
    }
    elements.push(
      <Link
        key={`l-${index}`}
        href={url}
        className="font-['satoshi-medium'] text-[#AF8F6E] !underline decoration-[#AF8F6E] decoration-solid underline-offset-2 transition-colors hover:text-[#8B6F4E]"
      >
        {phrase}
      </Link>,
    );
    prevEnd = end;
  });
  if (prevEnd < content.length) {
    elements.push(<span key="tail">{content.slice(prevEnd)}</span>);
  }

  return (
    <p className="font-['satoshi-light'] text-lg leading-relaxed text-[#312E2C]">
      {elements.length ? elements : content}
    </p>
  );
}

export default function BlogPostContent({ sections }) {
  return (
    <div className="flex flex-col gap-6">
      {sections.map((section, index) => {
        if (section.type === "h2") {
          return (
            <h2
              key={index}
              className="trim mt-8 text-2xl font-bold text-[#312E2C] md:text-3xl"
            >
              {section.text}
            </h2>
          );
        }
        if (section.type === "p") {
          return (
            <ParagraphWithLinks
              key={index}
              content={section.content}
              links={section.links}
            />
          );
        }
        return null;
      })}
    </div>
  );
}
