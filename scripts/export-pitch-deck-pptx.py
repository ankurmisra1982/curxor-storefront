#!/usr/bin/env python3
"""Export CurXor pitch deck to PowerPoint with speaker notes, branding, and appendix."""

from __future__ import annotations

from pathlib import Path

from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.text import MSO_ANCHOR, PP_ALIGN
from pptx.util import Inches, Pt

try:
    from PIL import Image, ImageDraw
except ImportError:  # pragma: no cover
    Image = None  # type: ignore[assignment,misc]
    ImageDraw = None  # type: ignore[assignment,misc]

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "docs" / "assets"
LOGO_PATH = ASSETS / "curxor-logo-mark.png"
OUTPUT = ROOT / "docs" / "CurXor-Pitch-Deck-Speaker-Notes.pptx"

# Brand tokens (curxor.ai — black + #BF5AF2 accent, monospace body on web)
BRAND = {
    "bg_dark": (12, 12, 16),
    "bg_slide": (18, 18, 22),
    "accent": (191, 90, 242),  # #BF5AF2
    "accent_soft": (160, 70, 210),
    "text_primary": (255, 255, 255),
    "text_body": (210, 210, 220),
    "text_muted": (140, 140, 155),
    "font_sans": "Segoe UI",
    "font_mono": "Consolas",
    "site": "curxor.ai",
    "version": "v0.2.0 · June 2026",
}

APPENDIX_ROWS = [
    ("Software v0.2.0", "Agent runtime · 54 QA checks"),
    ("Flight Command + 8 Claws + Forge", "Rich UI · some mock workspace data"),
    ("Local LLM (engine + dashboard)", "Code complete · needs Ollama on appliance"),
    ("Digital bridges (Alpaca / X)", "Coded · needs digital.env credentials"),
    ("MS-S1 MAX hardware validation", "Blocked · unit not received"),
    ("Golden image / production OTA", "Not done"),
]

APPENDIX_DISCLAIMERS = [
    "No guaranteed returns — Capital Claw performance is strategy-dependent.",
    "Creator posts require explicit operator skill approval before bridge egress.",
    "Paper trading available; live trades via Alpaca on eno2 only when configured.",
]

# (slide_title, bullets, speaker_notes)
SLIDES: list[tuple[str, list[str], str]] = [
    (
        "CurXor OS",
        [
            "Mint Autonomous Employees on Bare Metal.",
            "",
            "$3,999 once  ·  $0/mo API  ·  126 TOPS  ·  64 GB UMA",
            "",
            "ChatGPT bills per token. CurXor bills once.",
        ],
        """OPENING (30–45 sec)
Pause on the title. This is not another AI wrapper — it is a sovereign agent appliance.

KEY MESSAGE
CurXor OS mints autonomous digital employees on bare metal. One hardware purchase replaces recurring API rent for operators who run agents 24/7.

WALK THROUGH METRICS
• $3,999 — MS-S1 MAX bundle, one invoice, no subscription required for inference.
• $0/mo API — local Ollama/vLLM on localhost; you own the compute.
• 126 TOPS — Ryzen AI Max+ NPU on desk, not rate-limited cloud tiers.
• 64 GB UMA — unified memory for 7B–35B models alongside the agent stack.

TAGLINE (say it slowly)
"ChatGPT bills per token. CurXor bills once. Alpha stays on your metal."

TRANSITION
Before we show the product, let me frame the problem every power user already feels.""",
    ),
    (
        "The cloud tax on autonomous work",
        [
            "Operators pay $500+/mo in API tokens — and leak strategy to cloud LLMs.",
            "SaaS stacks (CRM, schedulers, trading wrappers) compress margin without sovereignty.",
            "",
            "Edge NPU hardware is real — but no one ships a complete sovereign agent stack.",
            "DIY Linux + Ollama lacks orchestration, egress control, OTA, and operator UX.",
        ],
        """FRAMING (45 sec)
Name the pain before the product. Investors and buyers both know AI is expensive — we quantify it.

FOR OPERATORS
• Algo traders, creators, outbound teams: $500+/mo is conservative for serious agent use.
• Every prompt, playbook, and strategy sent to OpenAI/Anthropic is alpha leaving the building.
• Layer on CRM, content tools, trading SaaS — margin compression with zero sovereignty.

FOR THE MARKET
• 126 TOPS on a desk is new — MS-S1 MAX class hardware is finally here.
• Yet buyers still default to cloud agents because integration is hard.
• DIY Ollama-in-a-box is not an agent fleet: no FRE, no Forge, no mesh kill switch, no OTA.

OBJECTION PREP
"If local models are good enough now, why not just run Ollama?" — Because operators need employees, not a chat window. CurXor ships the full stack.

TRANSITION
CurXor is the appliance answer — not SaaS, not a science project.""",
    ),
    (
        "CurXor: appliance, not another SaaS",
        [
            "Four-pillar edge stack on MINISFORUM MS-S1 MAX:",
            "P1 Compute · P2 Engine · P3 Mesh · P4 Flight Command",
            "",
            "Local LLM (127.0.0.1 only) · 8 Claws + The Forge",
            "Kill switch: eno1 command · eno2 egress · unplug stops agents",
            "Create-to-Earn: describe a Claw → deploy on-box in one session",
        ],
        """PRODUCT DEFINITION (60 sec)
CurXor OS is pre-integrated software on fixed hardware — an appliance, not a dev kit.

FOUR PILLARS (briefly — do not get lost in engineering)
• Pillar 1 Compute: Ollama/vLLM bound to 127.0.0.1 — rejected if not localhost.
• Pillar 2 Engine: vision → inference → motor_out / digital_out pipeline.
• Pillar 3 Mesh: ZMQ broker on eno2; Alpaca and X bridges for trades and posts only there.
• Pillar 4 Flight Command: FRE provisioning, eight Claws, Forge, SSE telemetry, dashboard.

FOUR CUSTOMER PROMISES (these are the slide headlines investors remember)
1. Local LLM — inference never leaves the box.
2. Digital employees — eight OOTB Claws plus The Forge factory.
3. Kill switch — eno1 is command plane; eno2 is egress; pull the cable, agents stop outbound.
4. Create-to-Earn — natural language → forged Claw → earning on metal in one session.

TRANSITION
We ship this as two repos today — appliance plus GTM — with one customer promise.""",
    ),
    (
        "Two repos · one promise",
        [
            "curxor-os — appliance: /opt/curxor/, systemd, OTA · v0.2.0 · 54 QA checks",
            "curxor storefront — GTM: curxor.ai, Stripe, Resend, synced Claw catalog",
            "",
            "Honest status: software scaffold complete.",
            "Gating: MS-S1 MAX validation + golden image (hardware receipt pending).",
        ],
        """TRACTION HONESTY (45 sec — credibility slide)
This slide builds trust. Do not oversell hardware readiness.

CURXOR-OS
• Installs to /opt/curxor/ under systemd target.
• v0.2.0 stable — agent runtime, unified comms, fifty-four QA checks passing.
• Four pillars wired: compute, engine, mesh, dashboard.

STOREFRONT
• curxor.ai live with Stripe pre-order and Resend email capture.
• Claw catalog synced from appliance source of truth (ootb-apps.ts).

GUARDRAIL (say explicitly)
Software scaffold is complete. MS-S1 MAX on-device ROCm/UMA validation and golden image freeze are the current gates — we are blocked on hardware receipt, not on engineering vapor.

WHY THIS MATTERS TO INVESTORS
We are not asking you to fund a slide deck. The GTM surface is live; the software ships; the risk is manufacturing validation, which is bounded and schedulable.

TRANSITION
The crown jewel of the product story is The Forge.""",
    ),
    (
        "The Forge — Create-to-Earn",
        [
            "1. Describe niche (text, photo, or live vision)",
            "2. Local LLM recommends stack by UMA budget tier",
            "3. One tap forges Claw profile → engine",
            "4. Claw earns 24/7 on your metal",
            "",
            "Viral loop: buyers become operators who mint more Claws.",
        ],
        """DEMO MOMENT (60 sec — show enthusiasm here)
The Forge is where CurXor stops being hardware and becomes a platform loop.

WALK THE FOUR STEPS
1. Operator describes intent — niche, workflow, even a photo or camera feed for vision context.
2. Local LLM recommends model stack tier based on UMA budget — no cloud provisioning API.
3. One tap writes Claw profile and applies to the engine — deploy on-box.
4. Claw runs 24/7: trade, create, outreach, arbitrage — whatever was forged.

CREATE-TO-EARN NARRATIVE
This is our viral mechanic: every buyer can mint specialized digital employees without per-token billing. Agencies white-label this later; indie hackers mint capital and creator Claws day one.

COMPETITIVE ANGLE
No competitor ships a natural-language Claw factory on localhost with immediate engine deployment.

TRANSITION
Forge mints custom Claws; we also ship ten digital employees out of the box.""",
    ),
    (
        "Ten Claws — digital employees OOTB",
        [
            "The Forge · Capital · Creator · Outreach · Arbitrage",
            "Signal · Swarm · Engage · Vital · Kin",
            "",
            "Each workspace: chat + skills + activity feed",
            "Trades/posts via explicit skill → bridge — LLM never hits internet directly",
        ],
        """PRODUCT DEPTH (60 sec — table optional in live demo)
Read the roster confidently; investors should hear "complete suite," not "ten random apps."

THE ROSTER
• The Forge — mint custom Claws
• Capital Claw — algo rules, Alpaca bridge on eno2
• Creator Claw — content pipeline, X bridge on eno2
• Outreach Claw — outbound sequences, CRM-style desk
• Arbitrage Claw — margin watch, fulfillment ops
• Signal Claw — The Neural Link: humanoid preview; device hub for glance, VR, robot, home, fleet
• Swarm Claw — robotaxi fleet preview from sovereign metal
• Engage Claw — community and DM engagement demos
• Vital Claw — wearables, labs, longevity protocol
• Kin Claw — household profiles, devices, personalities

SECURITY MODEL (important for enterprise)
Each workspace is an agent console. Trades and posts require an explicit skill tap — the LLM does not call the internet directly. Outbound is skill → mesh → Python bridge on eno2 only.

TRANSITION
This product architecture is deliberately sovereign — two network ports, two trust zones.""",
    ),
    (
        "Sovereign architecture",
        [
            "eno1 (10.0.0.1) — Flight Command :3080 · FRE · Claws · Forge · LLM client",
            "P1 Ollama @ 127.0.0.1:11434 · P2 Engine · P4 Dashboard",
            "",
            "eno2 (10.77.0.1) — ZMQ mesh · Alpaca + X bridges only",
            "Pull eno2 cable = kill outbound agents",
            "",
            "Vision 9100/9101 · Motor 9200/9201",
        ],
        """ARCHITECTURE (60 sec — draw on whiteboard if room allows)
This slide separates CurXor from "AI PC" marketing.

ENO1 — COMMAND PLANE
• Flight Command dashboard on 10.0.0.1:3080
• Captive portal for operators
• FRE, eight Claws, Forge, SSE telemetry
• Local LLM client talks to Pillar 1 on localhost only

ENO2 — EGRESS PLANE
• ZMQ mesh broker
• Digital bridges: Alpaca (trades), X (posts)
• Physical kill switch story: unplug eno2, outbound agents stop

MESH PORTS
Vision 9100/9101, Motor 9200/9201 — robotics path remains in stack for Engage demos and future hardware Claws.

ENTERPRISE HOOK
CISOs understand two-port segmentation better than "we promise not to exfiltrate."

TRANSITION
All of this runs on a specific hardware powerhouse — not generic x86.""",
    ),
    (
        "MINISFORUM MS-S1 MAX",
        [
            "Ryzen AI Max+ 395 · 126 TOPS NPU · 64 GB UMA",
            "~48 GB GPU heap (BIOS carve) · Dual 10GbE · ROCm gfx1151",
            "",
            "Not a PC — local inference appliance for 7B–35B + agent stack",
        ],
        """HARDWARE (45 sec)
Anchor the software story in silicon.

SPECS (hit the numbers)
• Ryzen AI Max+ 395 — CPU + NPU integrated
• 126 TOPS NPU inference — desk-scale, 24/7 workloads
• 64 GB unified memory — shared CPU/GPU/NPU pool
• ~48 GB GPU heap via BIOS carve — primary lever for large models
• Dual 10GbE — eno1/eno2 separation at wire speed
• ROCm gfx1151 — validated path pending unit receipt

POSITIONING LINE
"Not a PC — a money printer with local inference." Use if audience is operator-heavy; soften for institutional investors.

BIOS STORY
UMA carve-out is how we run 7B–35B models alongside the agent engine without cloud burst pricing.

TRANSITION
Hardware is $3,999 once — let me walk the business model.""",
    ),
    (
        "Business model",
        [
            "Now: $3,999 MS-S1 MAX bundle · CurXor OS pre-flash · Stripe pre-order live",
            "",
            "Future: OTA subscriptions · bridge marketplace · enterprise eno2 policies · white-label Forge",
            "",
            "Wedge: eliminate $6k+/yr API burn — payback < 8 months for power users",
        ],
        """ECONOMICS (60 sec)
Lead with hardware revenue clarity; expansion is optional upside.

HARDWARE NOW
• $3,999 one-time — bundle includes CurXor OS flash path
• Stripe pre-order live on curxor.ai
• No required monthly API fee — this is the wedge vs ChatGPT Teams + agent SaaS stacks

EXPANSION (do not over-weight — mention as optionality)
• OTA channel subscriptions
• Partner bridge marketplace (new egress integrations)
• Enterprise fleet with eno2 policy packs
• White-label Forge for agencies

WEDGE MATH
Power users burning $500+/mo in tokens = $6k+/yr. At $3,999 hardware, payback under eight months on API savings alone — before counting SaaS CRM/scheduler replacements.

TRANSITION
Who buys this first? Five personas we are already messaging on the storefront.""",
    ),
    (
        "Target buyers",
        [
            "Algo trader → Capital Claw on localhost (API fees + leakage)",
            "Creator / indie hacker → Creator Claw, $0/mo inference",
            "Outbound / agency → Outreach Claw on-box",
            "E-com / arbitrage → Arbitrage Claw",
            "Sovereignty-maximalist → pull eno2 = kill switch",
        ],
        """GO-TO-MARKET (45 sec)
Tie each segment to a Claw — makes the suite tangible.

PERSONA → PAIN → ANSWER
• Algo trader: API fees and strategy leakage → Capital Claw, localhost rules, Alpaca on eno2 only when skill invoked.
• Creator: token rent and lock-in → Creator Claw, local inference, X bridge on explicit post skill.
• Outbound/agency: CRM + lead SaaS stack → Outreach Claw on-box.
• E-com/arbitrage: margin tools + fulfillment SaaS → Arbitrage Claw.
• Sovereignty-maximalist: alpha exfil fear → physical eno2 kill switch narrative.

SALES MOTION
Storefront captures pre-orders; first units ship to operators who already feel the cloud tax — not hobbyists.

TRANSITION
Why we win against DIY and SaaS incumbents.""",
    ),
    (
        "Why CurXor wins",
        [
            "vs DIY Ollama box → FRE, Forge, mesh, OTA, bridges",
            "vs SaaS agents → alpha local; skill → bridge, not LLM → internet",
            "vs cloud tiers → 126 TOPS desk beats rate limits for 24/7",
            "vs robotics novelty → Digital Wealth: Claws as employees, ROI language",
            "vs security slides → two-port architecture + physical kill switch",
        ],
        """COMPETITIVE (45 sec)
Five rows — pick three based on audience.

DIY OLLAMA
Complete stack beats parts bin: FRE provisioning, Forge factory, mesh, OTA, digital bridges.

SAAS AGENTS
Alpha stays local. Outbound is explicit skill → bridge — auditable, not prompt injection to the open web.

CLOUD TIERS
24/7 agent workloads hit rate limits and token meters. Desk NPU runs flat once hardware is paid.

DIGITAL WEALTH PIVOT
We sell digital employees with ROI language — not robotics novelty. "Mint employees" resonates with traders and creators.

SECURITY
Two-port architecture with physical kill switch — enterprises understand unplugging egress.

TRANSITION
What is actually shipped today vs what is gated on hardware.""",
    ),
    (
        "Traction & validation",
        [
            "Shipped: 4-pillar install · Flight Command · 8 Claws + Forge · local LLM · mesh · OTA · storefront",
            "Pending: MS-S1 MAX ROCm/UMA · mesh benchmarks · golden image · signed OTA",
            "",
            "v0.2.0 · 54 QA checks · Pre-order live",
        ],
        """PROOF POINTS (60 sec — be precise)
Split shipped software from hardware gates again — repetition builds credibility.

SHIPPED
• Four-pillar install path and systemd target
• Flight Command UI with eight Claws and Forge
• Local LLM wired: engine + Forge + Creator/Capital dashboard chat
• Mesh publish, digital bridges, OTA daemon
• Storefront live, appliance catalog sync, CI on both repos

PENDING (hardware track)
• MS-S1 MAX ROCm/UMA proof on gfx1151
• End-to-end mesh latency benchmarks
• Golden image freeze + factory USB
• Production OTA artifacts + signed releases

METRICS ON SLIDE
v0.2.0 · 54 QA checks · pre-order live — say each number out loud.

TRANSITION
Here is how we close the hardware gate and scale.""",
    ),
    (
        "Roadmap",
        [
            "Now (v0.2.0): agent runtime · unified comms · 54 QA · build mode",
            "Next 90 days: MS-S1 MAX validation · golden image · production OTA",
            "H2 2026: customer pilots · Engage demo unit · case studies",
            "2027+: fleet OTA · partner bridges · enterprise eno2 policies",
        ],
        """ROADMAP (45 sec)
Show bounded near-term milestones — investors fund execution, not dreams.

NOW
Software scaffold and GTM surface — done.

NEXT 90 DAYS (funding-sensitive)
MS-S1 MAX validation, golden image, production OTA pipeline — this is what hardware receipt unblocks.

H2 2026
Customer pilots, Engage demo unit for community use case, publish case studies with real operator ROI.

2027+
Fleet OTA at scale, partner bridge marketplace, enterprise eno2 policy packs.

TRANSITION
What we are asking for and how to reach us.""",
    ),
    (
        "The ask",
        [
            "Fund: MS-S1 MAX validation · golden image run · first 100 units · production OTA",
            "Hire: field engineer for appliance support + factory flash at scale",
            "",
            "curxor.ai · @curxorai · Stripe pre-order on site",
            "",
            "Sovereign metal. Infinite Claws. One invoice.",
        ],
        """CLOSE (60 sec)
Be direct on use of funds; end with the tagline.

USE OF FUNDS
• Complete MS-S1 MAX validation on real silicon
• Golden image manufacturing run
• First one hundred customer units
• Production OTA pipeline with signed releases
• Field engineer for appliance support and factory flash at scale

CONTACT
curxor.ai · @curxorai · Stripe checkout live for pre-order

CLOSING LINE (pause)
"Sovereign metal. Infinite Claws. One invoice."

TRANSITION
If Q&A gets technical or skeptical, advance to the appendix slide — maturity matrix and legal guardrails.""",
    ),
]

APPENDIX_NOTES = """APPENDIX / Q&A SLIDE (keep in deck — do not present unless asked)
Use this slide when investors ask "what is real today?" or "what are the risks?"

MATURITY TABLE — walk row by row
• Software scaffold: complete, CI green — this is shipped code, not mockups only.
• Flight Command + Claws: rich UI; some workspace data is demo/mock until operator credentials loaded.
• Local LLM: code complete; requires Ollama deployed on appliance (Pillar 1).
• Digital bridges: Alpaca/X coded; operator supplies digital.env credentials.
• Hardware validation: blocked on MS-S1 MAX unit receipt — bounded, schedulable risk.
• Golden image / OTA: not done — funded by current raise.

DISCLAIMERS (read if financial or trading questions arise)
• No guaranteed returns. Capital Claw supports paper and live via Alpaca; outcomes depend on operator strategy.
• Creator posts require explicit skill approval — no autonomous posting without operator tap.
• Pre-order is live; ship dates tied to hardware validation milestone.

COMMON QUESTIONS
Q: "Is this just Ollama on a PC?"
A: FRE + Forge + mesh kill switch + OTA + eight Claws + bridges — integrated appliance, not a dev kit.

Q: "Why pre-order before hardware validation?"
A: GTM tests demand; software ships today; validation is the gated milestone we are fundraising to close.

Q: "Mock data?"
A: UI scaffold is production code; live data requires operator bridge credentials on eno2.

TIMING
Main deck: 12–15 min. Appendix: 2–3 min when needed. Total with Q&A: 20–25 min."""


def rgb(name: str) -> RGBColor:
    return RGBColor(*BRAND[name])


def ensure_logo_png() -> Path:
    ASSETS.mkdir(parents=True, exist_ok=True)
    if LOGO_PATH.exists():
        return LOGO_PATH
    if Image is None or ImageDraw is None:
        raise RuntimeError("Pillow is required to generate logo asset. Run: pip install pillow")

    size = 256
    img = Image.new("RGBA", (size, size), (0, 0, 0, 255))
    draw = ImageDraw.Draw(img)
    s = size / 32
    draw.rectangle([14 * s, 6 * s, 18 * s, 10 * s], fill=(191, 90, 242, 255))
    draw.rectangle([8 * s, 14 * s, 24 * s, 16 * s], fill=(255, 255, 255, 230))
    draw.rectangle([10 * s, 18 * s, 22 * s, 20 * s], fill=(255, 255, 255, 128))
    draw.rectangle([12 * s, 22 * s, 20 * s, 24 * s], fill=(191, 90, 242, 204))
    img.save(LOGO_PATH)
    return LOGO_PATH


def set_slide_background(slide, key: str = "bg_slide") -> None:
    fill = slide.background.fill
    fill.solid()
    fill.fore_color.rgb = rgb(key)


def add_textbox(
    slide,
    left,
    top,
    width,
    height,
    text: str,
    *,
    font_size=18,
    bold=False,
    color_key="text_body",
    align=PP_ALIGN.LEFT,
    font_key="font_sans",
):
    box = slide.shapes.add_textbox(left, top, width, height)
    tf = box.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.TOP
    p = tf.paragraphs[0]
    p.text = text
    p.alignment = align
    if not p.runs:
        p.add_run()
    run = p.runs[0]
    run.font.size = Pt(font_size)
    run.font.bold = bold
    run.font.color.rgb = rgb(color_key) if isinstance(color_key, str) else RGBColor(*color_key)
    run.font.name = BRAND[font_key]
    return tf


def add_top_accent_bar(slide) -> None:
    bar = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(0.06))
    bar.fill.solid()
    bar.fill.fore_color.rgb = rgb("accent")
    bar.line.fill.background()


def add_brand_header(slide, *, logo_height=0.42) -> None:
    logo = ensure_logo_png()
    slide.shapes.add_picture(str(logo), Inches(0.55), Inches(0.18), height=Inches(logo_height))
    add_textbox(
        slide,
        Inches(1.05),
        Inches(0.16),
        Inches(2.5),
        Inches(0.35),
        "CurXor",
        font_size=16,
        bold=True,
        color_key="text_primary",
        font_key="font_mono",
    )


def add_brand_footer(slide, slide_num: int, total: int) -> None:
    add_textbox(
        slide,
        Inches(0.55),
        Inches(7.05),
        Inches(4.0),
        Inches(0.25),
        BRAND["site"],
        font_size=9,
        color_key="text_muted",
        font_key="font_mono",
    )
    add_textbox(
        slide,
        Inches(11.5),
        Inches(7.05),
        Inches(1.5),
        Inches(0.25),
        f"{slide_num} / {total}",
        font_size=9,
        color_key="text_muted",
        font_key="font_mono",
        align=PP_ALIGN.RIGHT,
    )
    line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.55), Inches(6.92), Inches(12.2), Inches(0.015))
    line.fill.solid()
    line.fill.fore_color.rgb = RGBColor(50, 50, 58)
    line.line.fill.background()


def apply_brand_chrome(slide, slide_num: int, total: int, *, logo_height=0.42) -> None:
    add_top_accent_bar(slide)
    add_brand_header(slide, logo_height=logo_height)
    add_brand_footer(slide, slide_num, total)


def add_bullet_slide(prs: Presentation, title: str, bullets: list[str], notes: str, slide_num: int, total: int) -> None:
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_background(slide)
    apply_brand_chrome(slide, slide_num, total)

    add_textbox(
        slide,
        Inches(0.55),
        Inches(0.72),
        Inches(12.0),
        Inches(0.75),
        title,
        font_size=30,
        bold=True,
        color_key="text_primary",
    )

    bar = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.55), Inches(1.38), Inches(0.07), Inches(0.5))
    bar.fill.solid()
    bar.fill.fore_color.rgb = rgb("accent")
    bar.line.fill.background()

    body = slide.shapes.add_textbox(Inches(0.75), Inches(1.55), Inches(11.8), Inches(5.2))
    tf = body.text_frame
    tf.word_wrap = True
    tf.clear()

    first = True
    for line in bullets:
        p = tf.paragraphs[0] if first else tf.add_paragraph()
        first = False
        p.text = line or " "
        p.space_after = Pt(6)
        if not p.runs:
            p.add_run()
        run = p.runs[0]
        run.font.size = Pt(10 if not line.strip() else 19)
        run.font.color.rgb = rgb("text_body")
        run.font.name = BRAND["font_sans"]

    slide.notes_slide.notes_text_frame.text = notes


def add_title_slide(prs: Presentation, bullets: list[str], notes: str, slide_num: int, total: int) -> None:
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_background(slide, "bg_dark")
    apply_brand_chrome(slide, slide_num, total, logo_height=0.55)

    add_textbox(
        slide,
        Inches(0.8),
        Inches(1.55),
        Inches(11.5),
        Inches(1.0),
        "CurXor OS",
        font_size=46,
        bold=True,
        color_key="text_primary",
        font_key="font_mono",
    )
    add_textbox(
        slide,
        Inches(0.8),
        Inches(2.55),
        Inches(11.0),
        Inches(0.9),
        bullets[0],
        font_size=26,
        color_key="accent",
        font_key="font_sans",
    )

    metrics_y = 3.65
    for i, line in enumerate(bullets[2:5]):
        if not line.strip():
            continue
        add_textbox(
            slide,
            Inches(0.8),
            Inches(metrics_y + i * 0.42),
            Inches(11.0),
            Inches(0.35),
            line,
            font_size=17,
            color_key="text_body",
            font_key="font_mono",
        )

    add_textbox(
        slide,
        Inches(0.8),
        Inches(5.55),
        Inches(11.0),
        Inches(0.5),
        bullets[-1],
        font_size=15,
        color_key="text_muted",
    )
    add_textbox(
        slide,
        Inches(0.8),
        Inches(6.35),
        Inches(6.0),
        Inches(0.3),
        f"{BRAND['version']} · Sovereign Agent Appliance",
        font_size=10,
        color_key="text_muted",
        font_key="font_mono",
    )

    slide.notes_slide.notes_text_frame.text = notes


def add_appendix_slide(prs: Presentation, slide_num: int, total: int) -> None:
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_background(slide)
    apply_brand_chrome(slide, slide_num, total)

    add_textbox(
        slide,
        Inches(0.55),
        Inches(0.72),
        Inches(12.0),
        Inches(0.6),
        "Appendix — maturity & disclaimers",
        font_size=28,
        bold=True,
        color_key="text_primary",
    )

    rows = len(APPENDIX_ROWS) + 1
    cols = 2
    table_shape = slide.shapes.add_table(rows, cols, Inches(0.55), Inches(1.45), Inches(12.0), Inches(3.2))
    table = table_shape.table
    table.columns[0].width = Inches(7.2)
    table.columns[1].width = Inches(4.8)

    headers = ("Area", "Status")
    for c, header in enumerate(headers):
        cell = table.cell(0, c)
        cell.text = header
        for p in cell.text_frame.paragraphs:
            for run in p.runs:
                run.font.bold = True
                run.font.size = Pt(11)
                run.font.name = BRAND["font_mono"]
                run.font.color.rgb = rgb("text_primary")

    for r, (area, status) in enumerate(APPENDIX_ROWS, start=1):
        for c, value in enumerate((area, status)):
            cell = table.cell(r, c)
            cell.text = value
            for p in cell.text_frame.paragraphs:
                for run in p.runs:
                    run.font.size = Pt(10)
                    run.font.name = BRAND["font_sans"]
                    run.font.color.rgb = rgb("text_body")

    y = 4.85
    add_textbox(
        slide,
        Inches(0.55),
        Inches(y),
        Inches(12.0),
        Inches(0.3),
        "Disclaimers",
        font_size=14,
        bold=True,
        color_key="accent",
    )
    for i, line in enumerate(APPENDIX_DISCLAIMERS):
        add_textbox(
            slide,
            Inches(0.55),
            Inches(y + 0.35 + i * 0.38),
            Inches(12.0),
            Inches(0.35),
            f"• {line}",
            font_size=11,
            color_key="text_muted",
        )

    slide.notes_slide.notes_text_frame.text = APPENDIX_NOTES


def build() -> Path:
    ensure_logo_png()
    total = len(SLIDES) + 1  # + appendix

    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)

    for i, (title, bullets, notes) in enumerate(SLIDES):
        slide_num = i + 1
        if i == 0:
            add_title_slide(prs, bullets, notes, slide_num, total)
        else:
            add_bullet_slide(prs, title, bullets, notes, slide_num, total)

    add_appendix_slide(prs, total, total)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    prs.save(str(OUTPUT))
    return OUTPUT


if __name__ == "__main__":
    path = build()
    print(f"Wrote {path}")
