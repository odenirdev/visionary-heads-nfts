import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  maxWidth: 1180,
  marginInline: "auto",
  padding: "1rem",
});

export const Product = styled("a", {
  background: "rgba(255, 255, 255, 0.03)",
  borderRadius: 8,
  padding: "1rem",
  cursor: "pointer",
  position: "relative",
  maxWidth: 560,
  marginInline: "auto",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  overflow: "hidden",

  img: {
    objectFit: "contain",
    width: "100%",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    background: "rgba(0,0,0,0.6)",
    borderRadius: 6,

    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",

    transition: "all 0.2s ease-in-out",

    opacity: 0,
    transform: "translateY(110%)",

    strong: {
      fontSize: "$lg",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },

    "@media (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "1rem",
    },
  },

  "&:hover": {
    footer: {
      opacity: 1,
      transform: "translateY(0%)",
    },
  },
});
