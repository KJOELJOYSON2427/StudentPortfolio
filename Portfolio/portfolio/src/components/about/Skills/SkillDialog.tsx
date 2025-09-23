"use client";

import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { techIcons } from "../../../logic/techIcons";
import { useTheme } from "@/context/ThemeProvider.Context";

type SkillDialogProps = {
  open: boolean;
  onClose: () => void;
  label: string;
  details: string[];
};

export default function SkillDialog({
  open,
  onClose,
  label,
  details,
}: SkillDialogProps) {
  const { isDarkMode } = useTheme();
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md" className={isDarkMode ? "dark-dialog" : ""}>
      <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        {label} Technologies
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 12, top: 12 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ overflowX: "hidden" }}>
        {/* Responsive CSS Grid instead of MUI Grid */}
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(2, 1fr)", // 2 per row on mobile
            sm: "repeat(3, 1fr)", // 3 per row on tablet
            md: "repeat(4, 1fr)", // 4 per row on desktop
          }}
          gap={2}
        >
          {details.map((tech, i) => (
            <Card
              key={i}
              sx={{
                textAlign: "center",
                borderRadius: 3,
                p: 1,
                boxShadow: 3,
                "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
              }}
            >
              <CardContent>
                <Image
                  src={techIcons[tech as keyof typeof techIcons] || "/icons/default.png"}
                  alt={tech}
                  width={50}
                  height={50}
                />
                <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: "600" }}>
                  {tech}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
