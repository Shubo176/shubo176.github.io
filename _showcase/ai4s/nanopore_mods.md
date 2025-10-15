---
show: true
width: 6
date: 2025-10-01 00:01:00 +0800
group: AI4S
---

<div class="p-4">
  <h4 class="mb-1">DNA Modification Detection from Nanopore Signals with Transformers</h4>
  <p class="text-muted mb-2">Multimodal input: standardized current traces (len=32) + one-hot 21bp window → 21×36 features → 6-layer encoder, 8 heads, FFN 512→256→512, GELU.</p>
  <ul class="mb-2">
    <li>Data: xtg103 (unmodified) and plasmid (fully modified) for train/val; sal87 for test.</li>
    <li>Training: F1-score–driven LR scheduler, early stopping, best/last checkpoints.</li>
    <li>Result: ~20% modified proportion predicted on sal87 (ongoing analysis).</li>
  </ul>
  <p class="mb-0"><strong>Relevance</strong>: multimodal biological signal modeling, OOD generalization, interpretability.</p>
  <!-- Optional: external links -->
  <!-- <a href="https://github.com/YourRepo" target="_blank">Code</a> -->
</div>
