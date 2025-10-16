import { CSSProperties } from 'react';

interface ExtendedCSSProperties extends CSSProperties {
  '&::before'?: CSSProperties;
  '@media (maxWidth: 768px)'?: CSSProperties;
}

interface Styles {
  wrapper: ExtendedCSSProperties;
  container: ExtendedCSSProperties;
  title: ExtendedCSSProperties;
  item: ExtendedCSSProperties;
  badge: ExtendedCSSProperties;
  companyName: ExtendedCSSProperties;
  role: ExtendedCSSProperties;
  duration: ExtendedCSSProperties;
  list: ExtendedCSSProperties;
  listItem: ExtendedCSSProperties;
}

export const styles: Styles = {
  wrapper: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "3rem 1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    '@media (maxWidth: 768px)': {
      padding: "2rem 0.5rem",
    }
  },
  container: {
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "1.5rem",
    padding: "2.5rem",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(10px)",
    maxWidth: "900px",
    width: "100%",
    '@media (maxWidth: 768px)': {
      padding: "1.5rem",
      borderRadius: "1rem",
    }
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    background: "linear-gradient(90deg, #5a78ff, #c77dff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "2rem",
    textAlign: "center",
    '@media (maxWidth: 768px)': {
      fontSize: "1.5rem",
      marginBottom: "1.5rem",
    }
  },
  item: {
    marginBottom: "2rem",
    padding: "2rem 1.5rem 1.5rem",
    position: "relative",
    borderLeft: "4px solid #8b5cf6",
    borderRadius: "1rem",
    background: "linear-gradient(135deg, #fafafa 0%, #f3f4f6 100%)",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
    '@media (maxWidth: 768px)': {
      padding: "1.5rem 1rem 1rem",
      marginBottom: "1.5rem",
    }
  },
  badge: {
    position: "absolute" as const,
    top: "-12px",
    left: "20px",
    background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
    color: "white",
    padding: "0.4rem 1rem",
    borderRadius: "1.5rem",
    fontSize: "0.8rem",
    fontWeight: "600" as const,
    boxShadow: "0 4px 15px rgba(6, 182, 212, 0.4)",
    '@media (maxWidth: 768px)': {
      fontSize: "0.7rem",
      padding: "0.3rem 0.8rem",
      left: "10px",
    }
  },
  companyName: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#333",
    marginBottom: "0.5rem",
    '@media (maxWidth: 768px)': {
      fontSize: "1.2rem",
    }
  },
  role: {
    color: "#7c3aed",
    fontWeight: "600",
    fontSize: "1.1rem",
    margin: "0.3rem 0",
    '@media (maxWidth: 768px)': {
      fontSize: "1rem",
    }
  },
  duration: {
    fontSize: "0.95rem",
    color: "#777",
    marginBottom: "1rem",
    fontStyle: "italic",
    '@media (maxWidth: 768px)': {
      fontSize: "0.85rem",
    }
  },
  list: {
    listStyle: "none",
    paddingLeft: 0,
    color: "#555",
    lineHeight: "1.8",
    '@media (maxWidth: 768px)': {
      lineHeight: "1.6",
    }
  },
  listItem: {
    paddingLeft: "1.8rem",
    marginBottom: "0.8rem",
    position: "relative",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "1rem",
    '&::before': {
      content: '"▸"',
      position: "absolute",
      left: 0,
      color: "#8b5cf6",
      fontWeight: "bold",
    },
    '@media (maxWidth: 768px)': {
      fontSize: "0.9rem",
      paddingLeft: "1.5rem",
      marginBottom: "0.6rem",
    }
  },
};
