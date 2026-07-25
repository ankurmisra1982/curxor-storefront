#!/usr/bin/env python3
"""Thin wrapper — canonical exporter lives in curxor-os."""

from __future__ import annotations

import runpy
import sys
from pathlib import Path

# scripts/ → storefront root → sibling curxor-os
CANONICAL = (
    Path(__file__).resolve().parents[1].parent
    / "curxor-os"
    / "docs"
    / "founder"
    / "pitch-deck"
    / "export-pitch-deck-pptx.py"
)

if not CANONICAL.is_file():
    sys.exit(
        f"Canonical pitch-deck exporter not found:\n  {CANONICAL}\n"
        "Clone curxor-os as a sibling of this storefront repo."
    )

runpy.run_path(str(CANONICAL), run_name="__main__")
