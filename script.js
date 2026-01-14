<script>
    const diseases = [
      // Viral Diseases
      { name: "African Swine Fever (ASF)", type:"viral", symptoms:["fever","skin reddening","blotches","hemorrhages","death"], medicine:"No specific medicine", treatment:"Supportive care, isolation, euthanasia", prevention:"Strict biosecurity" },
      { name: "Classical Swine Fever (CSF)", type:"viral", symptoms:["fever","lethargy","purple skin","loss of appetite"], medicine:"No specific medicine", treatment:"Supportive care, isolation", prevention:"Vaccination, biosecurity" },
      { name: "PRRS", type:"viral", symptoms:["respiratory problems","abortions","lethargy","poor growth"], medicine:"Supportive care; antibiotics for secondary infections", treatment:"Isolate affected pigs; maintain hygiene", prevention:"Vaccination, biosecurity" },
      { name: "Swine Influenza", type:"viral", symptoms:["fever","coughing","nasal discharge","lethargy"], medicine:"Antivirals if available; supportive care", treatment:"Isolate affected pigs; fluids and warmth", prevention:"Vaccination; good hygiene; limit pig contact" },
      { name: "FMD", type:"viral", symptoms:["fever","blisters","lameness","loss of appetite"], medicine:"No specific treatment; supportive care", treatment:"Isolate and disinfect pens; symptomatic care", prevention:"Vaccination; biosecurity" },
      { name: "PCVAD", type:"viral", symptoms:["wasting","poor growth","reproductive failure","diarrhea"], medicine:"Supportive care", treatment:"Isolate sick pigs; maintain hygiene", prevention:"Vaccination; biosecurity" },
      { name: "Porcine Parvovirus (PPV)", type:"viral", symptoms:["stillbirths","mummified piglets","infertility"], medicine:"No specific medicine", treatment:"Supportive care; isolation", prevention:"Vaccination; biosecurity" },
      { name: "Porcine Teschovirus", type:"viral", symptoms:["neurological signs","lameness","diarrhea"], medicine:"No specific treatment", treatment:"Supportive care", prevention:"Biosecurity" },
      { name: "Swine Pox", type:"viral", symptoms:["pox lesions","fever","loss of appetite"], medicine:"No specific medicine", treatment:"Supportive care", prevention:"Vaccination; isolation" },
      { name: "Aujeszky’s Disease", type:"viral", symptoms:["fever","respiratory signs","neurological signs","death"], medicine:"No specific medicine", treatment:"Supportive care; isolation", prevention:"Vaccination; strict biosecurity" },

      // Bacterial Diseases
      { name: "Erysipelas", type:"bacterial", symptoms:["skin lesions","fever","sudden death","arthritis"], medicine:"Penicillin, tetracyclines", treatment:"Isolate affected pigs; antibiotics", prevention:"Vaccination; hygiene" },
      { name: "APP", type:"bacterial", symptoms:["severe pneumonia","difficulty breathing","sudden death"], medicine:"Antibiotics", treatment:"Isolate pigs; supportive care", prevention:"Good ventilation; biosecurity" },
      { name: "Salmonellosis", type:"bacterial", symptoms:["diarrhea","fever","vomiting","dehydration"], medicine:"Antibiotics", treatment:"Fluid therapy; isolate affected pigs", prevention:"Hygiene; proper feeding" },
      { name: "Leptospirosis", type:"bacterial", symptoms:["abortions","fever","kidney problems","weak piglets"], medicine:"Antibiotics (doxycycline, penicillin)", treatment:"Isolate affected pigs", prevention:"Rodent control; vaccination; hygiene" },
      { name: "Mycoplasma pneumonia", type:"bacterial", symptoms:["chronic cough","slow growth","difficulty breathing"], medicine:"Tylosin, lincomycin", treatment:"Supportive care; antibiotics", prevention:"Ventilation; biosecurity" },
      { name: "Clostridial Enteritis", type:"bacterial", symptoms:["diarrhea","weakness","sudden death"], medicine:"Antibiotics and antitoxins", treatment:"Supportive care; fluid therapy", prevention:"Vaccination; hygiene" },
      { name: "Streptococcosis", type:"bacterial", symptoms:["fever","meningitis","sudden death","joint swelling"], medicine:"Penicillin or ampicillin", treatment:"Supportive care; isolate infected pigs", prevention:"Biosecurity; vaccination" },
      { name: "Glässer’s Disease", type:"bacterial", symptoms:["fever","cough","swollen joints","meningitis"], medicine:"Antibiotics (penicillin, cephalosporins)", treatment:"Isolate pigs; supportive care", prevention:"Vaccination; hygiene" },
      { name: "Colibacillosis", type:"bacterial", symptoms:["diarrhea in piglets","dehydration","sudden death"], medicine:"Antibiotics; electrolytes", treatment:"Fluid therapy; isolate piglets", prevention:"Hygiene; proper feeding; vaccination" },
      { name: "Pasteurellosis", type:"bacterial", symptoms:["pneumonia","fever","cough","death"], medicine:"Antibiotics (tetracyclines, penicillin)", treatment:"Supportive care; antibiotics", prevention:"Good ventilation; biosecurity" },

      // Parasitic Diseases
      { name: "Coccidiosis", type:"parasitic", symptoms:["diarrhea","weakness","poor growth"], medicine:"Amprolium or sulfa drugs", treatment:"Clean pens; supportive care", prevention:"Hygiene; routine deworming" },
      { name: "Roundworms", type:"parasitic", symptoms:["poor growth","coughing","potbelly","diarrhea"], medicine:"Fenbendazole or levamisole", treatment:"Deworming; hygiene", prevention:"Routine deworming; proper feeding" },
      { name: "Whipworms", type:"parasitic", symptoms:["diarrhea","weight loss","anemia"], medicine:"Fenbendazole", treatment:"Deworming; supportive care", prevention:"Routine deworming; hygiene" },
      { name: "Lice", type:"parasitic", symptoms:["itching","skin damage","anemia"], medicine:"Insecticidal sprays or powders", treatment:"Treat pigs; clean environment", prevention:"Hygiene; regular checks" },
      { name: "Mites", type:"parasitic", symptoms:["mange","hair loss","itchy skin"], medicine:"Ivermectin", treatment:"Treat pigs; disinfect pens", prevention:"Hygiene; quarantine new pigs" },
      { name: "Tapeworms", type:"parasitic", symptoms:["muscle cysts","poor growth","diarrhea"], medicine:"Praziquantel", treatment:"Deworming; supportive care", prevention:"Prevent access to contaminated feed/water" },
      { name: "Strongyloidosis", type:"parasitic", symptoms:["diarrhea","weight loss","poor growth"], medicine:"Fenbendazole", treatment:"Deworming; hygiene", prevention:"Routine deworming; clean pens" },
      { name: "Eperythrozoonosis", type:"parasitic", symptoms:["anemia","weakness","jaundice"], medicine:"Tetracyclines", treatment:"Supportive care; treat infected pigs", prevention:"Control blood-sucking insects; hygiene" },
      { name: "Trichinellosis", type:"parasitic", symptoms:["muscle pain","weakness","poor growth"], medicine:"Albendazole or mebendazole", treatment:"Deworming; supportive care", prevention:"Prevent pigs from eating raw meat" },
      { name: "Balantidiasis", type:"parasitic", symptoms:["diarrhea","weight loss","poor growth"], medicine:"Tetracyclines", treatment:"Supportive care; hygiene", prevention:"Clean water; hygiene" },

      // Nutritional & Metabolic Disorders
      { name: "Iron Deficiency Anemia", type:"nutritional", symptoms:["pale piglets","weakness","slow growth"], medicine:"Iron injections or supplements", treatment:"Provide iron-rich feed or injection", prevention:"Supplement piglets shortly after birth" },
      { name: "Vitamin E/Selenium Deficiency", type:"nutritional", symptoms:["mulberry heart disease","sudden death","weakness"], medicine:"Vitamin E and selenium supplements", treatment:"Supportive care; supplementation", prevention:"Balanced feed with vitamins" },
      { name: "Rickets (Vitamin D Deficiency)", type:"nutritional", symptoms:["weak bones","deformities","lameness"], medicine:"Vitamin D supplements", treatment:"Correct diet; supportive care", prevention:"Proper nutrition; sunlight exposure" },
      { name: "Zinc Deficiency (Parakeratosis)", type:"nutritional", symptoms:["rough skin","poor growth","skin lesions"], medicine:"Zinc supplementation", treatment:"Adjust feed; provide supplements", prevention:"Balanced diet with minerals" },
      { name: "Copper Deficiency", type:"nutritional", symptoms:["anemia","poor growth","weak bones"], medicine:"Copper supplements", treatment:"Adjust feed quality", prevention:"Balanced diet with trace minerals" },
      { name: "Salt Deficiency", type:"nutritional", symptoms:["loss of appetite","weakness","sudden death"], medicine:"Salt supplementation", treatment:"Provide mineral salt blocks", prevention:"Balanced diet with salt" },
      { name: "Protein Deficiency", type:"nutritional", symptoms:["poor growth","emaciation","weak piglets"], medicine:"Protein-rich feed", treatment:"Adjust feed quality", prevention:"Balanced diet with adequate protein" },

      // Reproductive Disorders
      { name: "Mastitis-Metritis-Agalactia (MMA) Syndrome", type:"reproductive", symptoms:["fever","swollen udder","no milk"], medicine:"Antibiotics; anti-inflammatories", treatment:"Treat infection; supportive care; ensure piglets feed", prevention:"Good hygiene; proper feeding" },
      { name: "Porcine Reproductive Failure", type:"reproductive", symptoms:["infertility","abortions","stillbirths"], medicine:"Supportive care", treatment:"Isolate affected sows", prevention:"Biosecurity; nutrition management" },
      { name: "Uterine Prolapse", type:"reproductive", symptoms:["protrusion of uterus","bleeding","shock"], medicine:"No specific medicine", treatment:"Manual correction or surgery; supportive care", prevention:"Proper management during farrowing" },
      { name: "Stillbirth Syndrome", type:"reproductive", symptoms:["dead piglets at birth"], medicine:"No specific medicine", treatment:"Supportive care for sow", prevention:"Good nutrition; stress reduction" },

      // Skin & External Disorders
      { name: "Greasy Pig Disease", type:"skin", symptoms:["oozing skin lesions","redness","itching"], medicine:"Antibiotics (e.g., penicillin) and antiseptic washes", treatment:"Treat lesions; isolate affected pigs", prevention:"Maintain dry pens; hygiene" },
      { name: "Sunburn / Photosensitization", type:"skin", symptoms:["redness","swelling","skin lesions"], medicine:"Topical soothing ointments", treatment:"Provide shade and supportive care", prevention:"Avoid prolonged sun exposure" },
      { name: "Ringworm", type:"skin", symptoms:["circular skin lesions","hair loss","itching"], medicine:"Topical antifungals", treatment:"Treat lesions; disinfect pens", prevention:"Hygiene; avoid overcrowding" },
      { name: "Abscesses", type:"skin", symptoms:["swelling","pus","pain"], medicine:"Antibiotics if severe", treatment:"Drain abscess; supportive care", prevention:"Hygiene; avoid injuries" },

      // Misc & Stress
      { name: "Stress-related Diseases", type:"misc", symptoms:["tail biting","anorexia","poor growth"], medicine:"No specific medicine", treatment:"Reduce stress; separate aggressive pigs", prevention:"Proper stocking density; enrichment activities" },
      { name: "Heat Stress", type:"misc", symptoms:["panting","lethargy","reduced feed intake"], medicine:"No specific medicine", treatment:"Provide shade; cooling; water", prevention:"Proper ventilation; avoid overcrowding" },
      { name: "Porcine Stress Syndrome", type:"misc", symptoms:["muscle tremors","collapse","death"], medicine:"No specific medicine", treatment:"Reduce stress; supportive care", prevention:"Genetic selection; avoid stressors" }
      // Additional Viral Diseases
{ name: "Porcine Epidemic Diarrhea (PED)", type:"viral",
  symptoms:["severe diarrhea","vomiting","dehydration","high piglet mortality"],
  medicine:"No specific antiviral",
  treatment:"Electrolytes; warmth; supportive care",
  prevention:"Strict biosecurity; sanitation; vaccination where available"
},
{ name: "Senecavirus A", type:"viral",
  symptoms:["blisters on snout","lameness","mouth sores","fever"],
  medicine:"No specific medicine",
  treatment:"Supportive care; isolate affected pigs",
  prevention:"Biosecurity; disinfect equipment"
},
{ name: "Porcine Respiratory Coronavirus (PRCV)", type:"viral",
  symptoms:["mild cough","sneezing","respiratory distress"],
  medicine:"Supportive care",
  treatment:"Improve ventilation; supportive care",
  prevention:"Good housing; biosecurity"
},

// Additional Bacterial Diseases
{ name: "Tuberculosis (Mycobacterium)", type:"bacterial",
  symptoms:["weight loss","chronic cough","swollen lymph nodes"],
  medicine:"No effective treatment in pigs",
  treatment:"Cull infected pigs",
  prevention:"Biosecurity; avoid contaminated feed"
},
{ name: "Brucellosis", type:"bacterial",
  symptoms:["abortions","infertility","weak piglets"],
  medicine:"No effective treatment",
  treatment:"Cull infected animals",
  prevention:"Biosecurity; test breeding stock"
},
{ name: "Necrotic Enteritis", type:"bacterial",
  symptoms:["bloody diarrhea","sudden death","weakness"],
  medicine:"Antibiotics",
  treatment:"Supportive care; fluid therapy",
  prevention:"Hygiene; proper feeding"
},
{ name: "Foot Rot", type:"bacterial",
  symptoms:["lameness","swollen hooves","bad odor"],
  medicine:"Antibiotics; antiseptics",
  treatment:"Clean hooves; isolate affected pigs",
  prevention:"Dry flooring; hygiene"
},

// Additional Parasitic Diseases
{ name: "Lungworms", type:"parasitic",
  symptoms:["chronic cough","poor growth","breathing difficulty"],
  medicine:"Levamisole or ivermectin",
  treatment:"Deworming",
  prevention:"Routine deworming; clean pens"
},
{ name: "Kidney Worm (Stephanurus dentatus)", type:"parasitic",
  symptoms:["weight loss","poor growth","hind leg weakness"],
  medicine:"Ivermectin",
  treatment:"Deworming; supportive care",
  prevention:"Prevent soil contamination"
},
{ name: "Sarcoptic Mange", type:"parasitic",
  symptoms:["intense itching","thick skin","hair loss"],
  medicine:"Ivermectin",
  treatment:"Treat all pigs; disinfect pens",
  prevention:"Quarantine new pigs"
},

// Additional Nutritional Disorders
{ name: "Calcium-Phosphorus Imbalance", type:"nutritional",
  symptoms:["lameness","bone weakness","poor growth"],
  medicine:"Mineral supplementation",
  treatment:"Correct diet balance",
  prevention:"Balanced mineral nutrition"
},
{ name: "Vitamin A Deficiency", type:"nutritional",
  symptoms:["poor growth","blindness","reproductive problems"],
  medicine:"Vitamin A supplements",
  treatment:"Correct diet",
  prevention:"Adequate vitamin supplementation"
},
{ name: "Magnesium Deficiency", type:"nutritional",
  symptoms:["muscle tremors","nervousness","poor growth"],
  medicine:"Magnesium supplements",
  treatment:"Correct diet",
  prevention:"Balanced feed formulation"
},

// Additional Reproductive Disorders
{ name: "Retained Placenta", type:"reproductive",
  symptoms:["foul discharge","fever","loss of appetite"],
  medicine:"Antibiotics; oxytocin (vet advice)",
  treatment:"Veterinary intervention; supportive care",
  prevention:"Good farrowing management"
},
{ name: "Farrowing Stress", type:"reproductive",
  symptoms:["prolonged labor","weak piglets"],
  medicine:"Supportive care",
  treatment:"Assist farrowing; hydration",
  prevention:"Proper nutrition; calm environment"
},

// Additional Skin & Hoof Disorders
{ name: "Foot Cracks", type:"skin",
  symptoms:["lameness","bleeding","pain"],
  medicine:"Topical antiseptics",
  treatment:"Clean and treat cracks",
  prevention:"Dry floors; hoof care"
},
{ name: "Wounds & Bite Injuries", type:"skin",
  symptoms:["bleeding","swelling","infection"],
  medicine:"Antibiotics if infected",
  treatment:"Clean wounds; isolate injured pigs",
  prevention:"Reduce aggression; proper space"
},

// Environmental & Management Disorders
{ name: "Cold Stress", type:"misc",
  symptoms:["shivering","poor growth","piglet deaths"],
  medicine:"No specific medicine",
  treatment:"Provide warmth; dry bedding",
  prevention:"Proper housing; heating"
},
{ name: "Water Deprivation", type:"misc",
  symptoms:["dehydration","constipation","death"],
  medicine:"No specific medicine",
  treatment:"Immediate access to clean water",
  prevention:"Reliable water supply"
}
  // Bacterial Diseases
  { name: "Atrophic Rhinitis (AR)", type:"bacterial",
    symptoms:["nasal inflammation","twisted snouts","poor growth"],
    medicine:"Antibiotics (tetracyclines, sulfonamides)",
    treatment:"Improve ventilation; antibiotics; supportive care",
    prevention:"Vaccination; hygiene; reduce stress"
  },
  { name: "Actinobacillosis", type:"bacterial",
    symptoms:["arthritis","pneumonia","skin discoloration"],
    medicine:"Antibiotics (penicillin, tetracyclines)",
    treatment:"Isolate pigs; supportive care",
    prevention:"Biosecurity; hygiene"
  },
  { name: "Anthrax", type:"bacterial",
    symptoms:["sudden death","pharyngeal swelling","intestinal/systemic signs"],
    medicine:"No effective treatment in pigs",
    treatment:"Cull infected pigs; supportive care",
    prevention:"Biosecurity; avoid contaminated feed/water"
  },
  { name: "Bordetellosis", type:"bacterial",
    symptoms:["respiratory disease","sneezing","linked with AR"],
    medicine:"Antibiotics",
    treatment:"Supportive care; improve ventilation",
    prevention:"Vaccination; hygiene"
  },
  { name: "Campylobacteriosis", type:"bacterial",
    symptoms:["diarrhea","reproductive issues"],
    medicine:"Antibiotics (erythromycin, tetracyclines)",
    treatment:"Supportive care; fluid therapy",
    prevention:"Hygiene; biosecurity"
  },

  // Viral Diseases
  { name: "Blue Eye Disease (Porcine Rubulavirus)", type:"viral",
    symptoms:["neurological signs","reproductive failure","piglet mortality"],
    medicine:"No specific medicine",
    treatment:"Supportive care; isolate affected pigs",
    prevention:"Biosecurity; vaccination where available"
  },
  { name: "Border Disease (related to BVDV)", type:"viral",
    symptoms:["congenital defects","reproductive losses"],
    medicine:"No specific medicine",
    treatment:"Supportive care",
    prevention:"Biosecurity; test breeding stock"
  },
  { name: "Borna Disease", type:"viral",
    symptoms:["neurological disorder","rare cases"],
    medicine:"No specific medicine",
    treatment:"Supportive care",
    prevention:"Biosecurity"
  },

  // Parasitic Disorders
  { name: "Congenital Tremors", type:"parasitic",
    symptoms:["shaking piglets","neurological signs in newborns"],
    medicine:"No specific medicine",
    treatment:"Supportive care; warmth",
    prevention:"Biosecurity; avoid infected breeding stock"
  },

  // Toxin/Environmental Disorders
  { name: "Aflatoxicosis", type:"toxin",
    symptoms:["poor growth","liver damage"],
    medicine:"No specific medicine",
    treatment:"Remove contaminated feed; supportive care",
    prevention:"Proper feed storage; avoid moldy grains"
  },
  { name: "Botulism", type:"toxin",
    symptoms:["paralysis","sudden death"],
    medicine:"Antitoxin (rarely available)",
    treatment:"Supportive care; remove contaminated feed",
    prevention:"Avoid spoiled feed; hygiene"
  },
  { name: "Poisoning (plants/chemicals)", type:"toxin",
    symptoms:["varies by toxin","weakness","death"],
    medicine:"No specific medicine",
    treatment:"Remove source; supportive care",
    prevention:"Avoid toxic plants/chemicals; safe feed"
  },

  // Miscellaneous Disorders
  { name: "Edema Disease (E. coli toxin)", type:"misc",
    symptoms:["sudden death","neurological signs","common in weaned piglets"],
    medicine:"Antibiotics (limited effect)",
    treatment:"Supportive care; fluid therapy",
    prevention:"Vaccination; hygiene; proper feeding"
  },
  { name: "Bush Foot (Foot Rot variant)", type:"misc",
    symptoms:["severe lameness","hoof swelling","bad odor"],
    medicine:"Antibiotics; antiseptics",
    treatment:"Clean hooves; isolate affected pigs",
    prevention:"Dry flooring; hygiene"
  }

    ];

function diagnose() {
  const input = document.getElementById("symptoms").value.toLowerCase();
  const errorEl = document.getElementById("error");
  const resultEl = document.getElementById("result");

  errorEl.textContent = "";
  resultEl.innerHTML = "";

  if (!input) {
    errorEl.textContent = "Please enter symptoms!";
    return;
  }

  const userSymptoms = input.split(",").map(s => s.trim()).filter(Boolean);

  if (userSymptoms.length < 2) {
    errorEl.textContent = "Please enter at least 2 symptoms.";
    return;
  }

  let matches = [];

  diseases.forEach(disease => {
    let matched = 0;
    disease.symptoms.forEach(sym => {
      userSymptoms.forEach(userSym => {
        if (sym.includes(userSym) || userSym.includes(sym)) matched++;
      });
    });

    if (matched >= 2) {
      matches.push({
        ...disease,
        matchPercentage: Math.round((matched / disease.symptoms.length) * 100)
      });
    }
  });

  if (!matches.length) {
    resultEl.innerHTML = "<p>No matching disease found. Consult a veterinarian.</p>";
    return;
  }

  matches
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
    .slice(0, 3)
    .forEach(d => {
      const card = document.createElement("div");
      card.className = `card ${d.type}`;
      card.innerHTML = `
        <h2>${d.name}</h2>
        <p class="match-percentage">Match: ${d.matchPercentage}%</p>
        <p><strong>Medicine:</strong> ${d.medicine}</p>
        <p><strong>Treatment:</strong> ${d.treatment}</p>
        <p><strong>Prevention:</strong> ${d.prevention}</p>
      `;
      resultEl.appendChild(card);
    });
}
