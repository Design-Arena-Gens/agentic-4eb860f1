/* eslint-disable react/no-unescaped-entities */
"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

const capabilitySections = [
  {
    id: "product",
    label: "Ship Full Products",
    headline: "Plan, scaffold, and deliver production-ready apps.",
    description:
      "Give me your goal and constraints. I will scope the solution, design the architecture, build the codebase, document the release, and prepare the deployment package—end to end.",
    bulletPoints: [
      "Multi-step planning with iterative refinement",
      "Full-stack implementation across modern frameworks",
      "Automated quality checks, linting, and test scaffolding",
      "Deployment hand-off with environment notes and runbooks",
    ],
    samplePrompt: "“I need an MVP that helps creators sell digital downloads.”",
  },
  {
    id: "code",
    label: "Code With Context",
    headline: "Understand existing repos and ship precise contributions.",
    description:
      "Drop me into any repository. I read existing patterns, map dependencies, and craft changes that feel native to your codebase—including tests, docs, and migration steps.",
    bulletPoints: [
      "Repository analysis with risk callouts",
      "Feature work, bug fixes, and refactors",
      "Scoped PRs with commit suggestions",
      "Follow-up instructions for reviewers",
    ],
    samplePrompt:
      "“Refactor our data loader to support incremental static regeneration.”",
  },
  {
    id: "automation",
    label: "Automate Workflows",
    headline: "Orchestrate multi-tool automations with human-grade clarity.",
    description:
      "From cron jobs to agentic pipelines—I design flows, integrate APIs, and document the operational playbook so you can hit ‘Run’ with confidence.",
    bulletPoints: [
      "Workflow blueprints and sequence diagrams",
      "Robust error handling and alerting hooks",
      "Integrations across SaaS, cloud, and CLIs",
      "Post-deployment monitoring checklists",
    ],
    samplePrompt:
      "“Watch Slack for new leads, enrich via Clearbit, and sync to HubSpot.”",
  },
  {
    id: "support",
    label: "Partner In Delivery",
    headline: "Stay on the project until the job is truly done.",
    description:
      "I'm an always-on teammate: clarify requirements, surface trade-offs, track open threads, and iterate until the outcome is live and validated.",
    bulletPoints: [
      "Context memory across interactions",
      "Transparent status updates and TODOs",
      "Risk mitigation and contingency planning",
      "Proactive follow-up with next steps",
    ],
    samplePrompt:
      "“Keep iterating on the UI until stakeholders sign off and it's deployed.”",
  },
] as const;

const deliveryHighlights = [
  {
    title: "Rapid Discovery",
    description:
      "Clarify goals, surface unknowns, and co-author a concrete plan before touching code.",
  },
  {
    title: "Build In Public",
    description:
      "Every action is documented—architecture, trade-offs, and diffs. You always know what's happening.",
  },
  {
    title: "Quality Loop",
    description:
      "Lint, test, and verify before handing off. I leave clear instructions for you to reproduce results locally.",
  },
  {
    title: "Deployment Ready",
    description:
      "Bundle environment configs, scripts, and verifications so the final push is a one-command affair.",
  },
] as const;

const quickWins = [
  {
    title: "Scope A Greenfield App",
    blurb: "Architect a full Next.js + Vercel deployment with auth and CMS.",
  },
  {
    title: "Stabilize A Legacy Service",
    blurb: "Audit error logs, patch regressions, and add guardrail tests.",
  },
  {
    title: "Automate Daily Reporting",
    blurb: "Pull analytics, format insights, and deliver to Slack every morning.",
  },
];

const workflowStages = [
  {
    title: "1. Understand",
    detail:
      "Collect goals, constraints, assets, and priorities. Surface risks and align on the definition of done.",
  },
  {
    title: "2. Plan",
    detail:
      "Draft architecture, milestones, and validation steps. Review edge cases before writing production code.",
  },
  {
    title: "3. Build",
    detail:
      "Implement features with clean abstractions, documentation, and thoughtful commits.",
  },
  {
    title: "4. Validate",
    detail:
      "Run local checks, document test coverage, and provide reproduction steps or videos when helpful.",
  },
  {
    title: "5. Launch",
    detail:
      "Ship with deployment scripts, environment notes, rollback plans, and post-launch monitoring guidance.",
  },
];

export default function Home() {
  const [activeCapability, setActiveCapability] =
    useState<(typeof capabilitySections)[number]["id"]>(
      capabilitySections[0]!.id,
    );

  const currentCapability = useMemo(
    () => capabilitySections.find((capability) => capability.id === activeCapability),
    [activeCapability],
  );

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.heroPill}>Agentic Delivery Partner</span>
            <h1>Ask once. I plan, build, and ship the whole solution.</h1>
            <p>
              I’m an autonomous engineering agent that translates your intent
              into working software, documentation, and deployment artifacts—without
              handing the hard parts back to you.
            </p>
            <div className={styles.heroActions}>
              <a href="#capabilities" className={styles.primaryAction}>
                Explore capabilities
              </a>
              <a href="#workflows" className={styles.secondaryAction}>
                See how delivery works
              </a>
            </div>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>10x faster</span>
              <span className={styles.statLabel}>from idea to shipped build</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>100% async</span>
              <span className={styles.statLabel}>clear threads & handoffs</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>Zero guesswork</span>
              <span className={styles.statLabel}>deep context + documented trade-offs</span>
            </div>
          </div>
        </section>

        <section id="capabilities" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>What I can do for you</h2>
            <p>
              Pick a lane to see how I operate. Every capability is backed by
              planning, implementation, QA, and deployment guidance—because “done”
              means live in production.
            </p>
          </div>
          <div className={styles.capabilityPanel}>
            <div className={styles.capabilityMenu}>
              {capabilitySections.map((capability) => (
                <button
                  key={capability.id}
                  type="button"
                  className={`${styles.capabilityButton} ${
                    capability.id === activeCapability ? styles.capabilityButtonActive : ""
                  }`}
                  onClick={() => setActiveCapability(capability.id)}
                >
                  <span className={styles.capabilityLabel}>{capability.label}</span>
                  <span className={styles.capabilityHeadline}>
                    {capability.headline}
                  </span>
                </button>
              ))}
            </div>
            {currentCapability && (
              <div className={styles.capabilityContent}>
                <div className={styles.capabilityIntro}>
                  <h3>{currentCapability.label}</h3>
                  <p>{currentCapability.description}</p>
                </div>
                <ul className={styles.capabilityList}>
                  {currentCapability.bulletPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className={styles.capabilityPrompt}>
                  <span>Try me with:</span>
                  <p>{currentCapability.samplePrompt}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Why teams ship with Codex</h2>
            <p>
              A reliable partner who codes, documents, and hands off production-ready
              work—without needing constant supervision.
            </p>
          </div>
          <div className={styles.highlightGrid}>
            {deliveryHighlights.map((highlight) => (
              <article key={highlight.title} className={styles.highlightCard}>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="workflows" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>The delivery flow</h2>
            <p>
              Every engagement follows a traceable sequence so you can drop in at any
              time and understand the exact state of the project.
            </p>
          </div>
          <div className={styles.workflowTrack}>
            {workflowStages.map((stage) => (
              <div key={stage.title} className={styles.workflowStage}>
                <span className={styles.workflowTitle}>{stage.title}</span>
                <p>{stage.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Great starting prompts</h2>
            <p>Set the context, state the goal, and I'll run with the rest.</p>
          </div>
          <div className={styles.quickWins}>
            {quickWins.map((item) => (
              <div key={item.title} className={styles.quickWinCard}>
                <h3>{item.title}</h3>
                <p>{item.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.finalCta}>
            <h2>Ready when you are.</h2>
            <p>
              Drop a prompt with your objective, constraints, and definition of done.
              I’ll scope, implement, and deliver a verified build—end to end.
            </p>
            <a href="mailto:codex-agent@example.com" className={styles.primaryAction}>
              Start a build request
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
