---
show: true
width: 6
date: 2025-10-01 00:02:00 +0800
group: AI4S
---

<div class="p-4">
  <h4 class="mb-1">Protein Melting Temperature Prediction via ESM Embeddings and AlphaFold Structures</h4>
  <p class="text-muted mb-2">Sequence + structure embeddings (1280-d) fused with Rosetta ΔG, Shannon entropy, OGT class → MLP regression; Optuna for hyper-parameter search.</p>
  <ul class="mb-2">
    <li>Data: FireProt/ProThermDB/Meltome/ThermomutDB + literature; CD-HIT 90% de-redundancy, N=28,463.</li>
    <li>Split: 9:1 train/val. 75 post-2023 samples as held-out test.</li>
    <li>Performance: test RMSE = 9.37; 10-fold CV in progress.</li>
  </ul>
  <p class="mb-0"><strong>Relevance</strong>: multimodal fusion and protein thermodynamics with rigorous evaluation.</p>
  <!-- <a href="https://github.com/YourRepo" target="_blank">Code</a> -->
</div>
