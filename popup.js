const articles = [
  {
    number: 1,
    title: "Sovereignty of the people",
    content: "All power belongs to the people who shall exercise their sovereignty in accordance with this Constitution.",
    explanation: "This article establishes that the ultimate power in Uganda rests with its citizens. It emphasizes the democratic nature of the country and the people's right to govern themselves through constitutional means."
  },
  {
    number: 2,
    title: "Supremacy of the Constitution",
    content: "This Constitution is the supreme law of Uganda and shall have binding force on all authorities and persons throughout Uganda.",
    explanation: "This article establishes the Constitution as the highest law in Uganda. It means that all other laws, decisions, and actions must comply with and cannot contradict the Constitution."
  },
  {
    number: 3,
    title: "Defense of the Constitution",
    content: "It is prohibited for any person or group of persons to take or retain control of the Government of Uganda, except in accordance with the provisions of this Constitution.",
    explanation: "This article prohibits unconstitutional takeovers of the government and emphasizes the importance of following constitutional procedures for governance."
  },
  {
    number: 4,
    title: "Promotion of public awareness of the Constitution",
    content: "The State shall promote public awareness of this Constitution by translating it into Ugandan languages and disseminating it as widely as possible.",
    explanation: "This article mandates the government to ensure that citizens are aware of their constitutional rights and responsibilities by making the Constitution accessible in local languages."
  },
  {
    number: 5,
    title: "National Unity and Stability",
    content: "The State shall ensure and promote national unity and stability.",
    explanation: "This article emphasizes the government's responsibility to maintain peace and unity among all Ugandan citizens."
  },
  {
    number: 6,
    title: "Gender Balance and Fair Representation",
    content: "The State shall ensure gender balance and fair representation of marginalized groups on all constitutional and other bodies.",
    explanation: "This article promotes equality and inclusivity in governance by mandating fair representation of all groups, including women and marginalized communities."
  },
  {
    number: 7,
    title: "National Symbols and Seals",
    content: "Uganda shall have a National Flag, a National Coat of Arms, a Public Seal, a National Anthem and a National Motto.",
    explanation: "This article establishes the official symbols of Uganda, which represent the country's sovereignty and identity."
  },
  {
    number: 8,
    title: "Regional Cooperation",
    content: "Uganda shall strive to promote regional and pan-African cultural, economic and political cooperation and integration.",
    explanation: "This article commits Uganda to work towards greater African unity and cooperation on various levels."
  },
  {
    number: 9,
    title: "Citizenship",
    content: "Every person born in Uganda one of whose parents or grandparents is or was a member of any of the indigenous communities existing and residing within the borders of Uganda as at the first day of February, 1926, and every person born outside Uganda one of whose parents or grandparents was at the time of birth of that person a citizen of Uganda by birth, shall be a citizen of Uganda by birth.",
    explanation: "This article defines who is considered a citizen of Uganda by birth, based on ancestry and connection to indigenous communities."
  },
  {
    number: 10,
    title: "Citizenship by registration",
    content: "A person may acquire citizenship by registration if they meet certain criteria, such as marriage to a Ugandan citizen or long-term residency.",
    explanation: "This article outlines how non-Ugandans can become citizens through a registration process, promoting inclusion of those with strong ties to Uganda."
  },
  {
    number: 11,
    title: "Dual Citizenship",
    content: "A Ugandan citizen shall not lose citizenship by reason of acquiring the citizenship of another country.",
    explanation: "This article allows Ugandans to hold citizenship of other countries without losing their Ugandan citizenship, recognizing the global nature of modern society."
  },
  {
    number: 12,
    title: "National Citizenship and Immigration Board",
    content: "There shall be a National Citizenship and Immigration Board to handle matters related to citizenship and immigration.",
    explanation: "This article establishes a body to oversee and manage citizenship and immigration issues in Uganda."
  },
  {
    number: 13,
    title: "Protection of Fundamental Rights",
    content: "Fundamental rights and freedoms of the individual are inherent and not granted by the State.",
    explanation: "This article recognizes that human rights are innate and not bestowed by the government, emphasizing their inalienable nature."
  },
  {
    number: 14,
    title: "Right to Life",
    content: "No person shall be deprived of life intentionally except in execution of a sentence passed in a fair trial by a court of competent jurisdiction in respect of a criminal offence under the laws of Uganda and the conviction and sentence have been confirmed by the highest appellate court.",
    explanation: "This article protects the right to life, allowing for capital punishment only under strict legal conditions."
  },
  {
    number: 15,
    title: "Right to Personal Liberty",
    content: "Every person has the right to personal liberty and shall not be deprived of personal liberty except as prescribed by law.",
    explanation: "This article guarantees personal freedom, allowing for its limitation only through legal means."
  },
  {
    number: 16,
    title: "Respect for Human Dignity and Protection from Inhuman Treatment",
    content: "No person shall be subjected to any form of torture or cruel, inhuman or degrading treatment or punishment.",
    explanation: "This article prohibits torture and inhumane treatment, protecting the dignity and physical integrity of all individuals."
  },
  {
    number: 17,
    title: "Protection from Slavery, Servitude and Forced Labour",
    content: "No person shall be held in slavery or servitude, and no person shall be required to perform forced labour.",
    explanation: "This article prohibits slavery and forced labor, upholding the freedom and dignity of all individuals."
  },
  {
    number: 18,
    title: "Right to Privacy",
    content: "Every person has a right to privacy of person, home and other property.",
    explanation: "This article protects individuals' privacy in their personal lives, homes, and possessions from unwarranted intrusion."
  },
  {
    number: 19,
    title: "Right to a Fair Hearing",
    content: "Every person has the right to a fair, speedy and public hearing before an independent and impartial court or tribunal established by law.",
    explanation: "This article ensures that all individuals have the right to a just legal process when accused of a crime or involved in a legal dispute."
  },
  {
    number: 20,
    title: "Protection of Freedom of Conscience, Expression, Movement, Religion, Assembly and Association",
    content: "Every person has the right to freedom of speech, expression, movement, religion, assembly, and association.",
    explanation: "This article protects various fundamental freedoms that are essential for a democratic society."
  },
  {
    number: 21,
    title: "Right to Education",
    content: "All persons have a right to education.",
    explanation: "This article establishes education as a fundamental right for all Ugandans."
  },
  {
    number: 22,
    title: "Right to Culture and Similar Rights",
    content: "Every person has a right to belong to, enjoy, practice, profess, maintain and promote any culture, cultural institution, language, tradition, creed or religion in community with others.",
    explanation: "This article protects cultural and religious freedoms, promoting diversity and tolerance in Ugandan society."
  },
  {
    number: 23,
    title: "Protection of Property",
    content: "Every person has a right to own property either individually or in association with others.",
    explanation: "This article safeguards the right to own property, which is fundamental to economic freedom and personal security."
  },
  {
    number: 24,
    title: "Right to a Clean and Healthy Environment",
    content: "Every Ugandan has a right to a clean and healthy environment.",
    explanation: "This article establishes environmental protection as a constitutional right, promoting sustainable development and public health."
  },
  {
    number: 25,
    title: "Affirmative Action in Favour of Marginalized Groups",
    content: "The State shall take affirmative action in favour of groups marginalized on the basis of gender, age, disability or any other reason created by history, tradition or custom, for the purpose of redressing imbalances which exist against them.",
    explanation: "This article allows for special measures to promote equality for historically disadvantaged groups."
  },
  {
    number: 26,
    title: "Protection of Rights of Women",
    content: "Women shall be accorded full and equal dignity of the person with men.",
    explanation: "This article ensures gender equality and protects women's rights in all aspects of life."
  },
  {
    number: 27,
    title: "Rights of Children",
    content: "Children have the right to basic education and shall be protected from social or economic exploitation.",
    explanation: "This article safeguards the rights of children, particularly in education and protection from exploitation."
  },
  {
    number: 28,
    title: "Rights of Persons with Disabilities",
    content: "Persons with disabilities have a right to respect and human dignity and the State shall take appropriate measures to ensure that they realize their full mental and physical potential.",
    explanation: "This article ensures equal rights and opportunities for persons with disabilities."
  },
  {
    number: 29,
    title: "Protection of the Family",
    content: "The family is the natural and basic unit of society and is entitled to protection by society and the State.",
    explanation: "This article recognizes the importance of family in Ugandan society and mandates its protection."
  },
  {
    number: 30,
    title: "Affirmative Action for Persons with Disabilities",
    content: "The State shall take affirmative action in favour of groups marginalized on the basis of disability.",
    explanation: "This article allows for special measures to ensure equal opportunities for persons with disabilities."
  }
  // ... (other articles remain the same)
];

function getRandomArticle() {
  return articles[Math.floor(Math.random() * articles.length)];
}

function displayArticle() {
  const article = getRandomArticle();
  const content = document.getElementById('article-content');
  if (content) {
    content.innerHTML = `
      <h2>Article ${article.number}: ${article.title}</h2>
      <p><strong>Content:</strong> ${article.content}</p>
      <p><strong>Explanation:</strong> ${article.explanation}</p>
    `;
  }
}

if (typeof chrome !== 'undefined' && chrome.storage) {
  chrome.storage.local.get(['showPopup'], (result) => {
    if (result.showPopup) {
      displayArticle();
      chrome.storage.local.set({ showPopup: false });
    } else {
      document.body.innerHTML = '<p> Ayo🖐 see you again tomorrow!</p>';
    }
  });
} else {
  console.log('Chrome storage is not available. This might not be running in a Chrome extension context.');
  displayArticle();
}