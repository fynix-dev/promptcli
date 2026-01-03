export default function BentoGrid() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      {/* Section Header */}
      <div className="mb-14">
        <h2 className="text-3xl w-full text-center font-semibold text-primary-text">
          What makes PromptCLI <span className="text-accent-primary">unique</span>
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-6">

        {/* BIG FEATURE 1 */}
        <div className="col-span-12 md:col-span-7 container p-6">
            <div>
                <h3 className="text-lg font-semibold text-primary-text">
                    One-Line → Production-Ready Prompt
                </h3>
                <p className="mt-2 text-sm text-primary-text">
                    Describe your idea in one sentence. PromptCLI transforms it into a structured,
                    constraint-aware, production-ready AI prompt automatically.
                </p>
                <div className="mt-4 text-sm text-emerald-400">
                    &gt; Idea → Structured Prompt
                </div>
            </div>
            <div className="w-[100px] h-[150px] bg-muted-text">
                Image
            </div>
        </div>

        {/* MEDIUM FEATURE 2 */}
        <div className="col-span-12 md:col-span-5 container p-6">
          <h3 className="text-lg font-semibold text-primary-text">
            Context-Aware Refinement Questions
          </h3>
          <p className="mt-2 text-sm text-primary-text">
            PromptCLI asks only what matters — tone, audience, constraints —
            eliminating unnecessary back-and-forth.
          </p>
          <div className="mt-4 text-sm text-emerald-400">
            ✓ Tone ✓ Audience ✓ Constraints
          </div>
        </div>

        {/* BIG FEATURE 3 */}
        <div className="col-span-12 md:col-span-8 container p-6">
          <h3 className="text-lg font-semibold text-primary-text">
            Chat-Based Prompt Refinement
          </h3>
          <p className="mt-2 text-sm text-primary-text">
            Improve the same prompt through a guided chat instead of rewriting
            from scratch every time.
          </p>
          <div className="mt-4 font-mono text-sm text-emerald-400">
            &gt; refine — tone professional
          </div>
        </div>

        {/* SMALL FEATURE 4 */}
        <div className="col-span-12 md:col-span-4 container p-6">
          <h3 className="text-lg font-semibold text-primary-text">
            Multi-Format Export
          </h3>
          <p className="mt-2 text-sm text-primary-text">
            Export prompts in formats optimized for real workflows.
          </p>
          <div className="mt-4 text-sm text-emerald-400">
            TXT · MD · JSON · CLI
          </div>
        </div>

        {/* MEDIUM FEATURE 6 */}
        <div className="col-span-12 md:col-span-12 container p-6">
          <h3 className="text-lg font-semibold text-primary-text">
            Terminal-First Experience
          </h3>
          <p className="mt-2 text-sm text-primary-text">
            A clean, minimal interface inspired by CLI workflows —
            optimized for focus, speed, and precision.
          </p>
        </div>

      </div>
    </section>
  );
}
