// Project Data Structure
export const Project = {
  id: 1,
  title: "Project Title",
  description: "Project Description",
  image: "Project Image URL",
  tags: ["tag1", "tag2", "tag3"],
  githubLink: "GitHub link (optional)",
  liveLink: "Live site link (optional)",
  category: "AI" // or "Web", "Android", "All"
};

// Skill Data Structure
export const Skill = {
  name: "Skill Name",
  level: 85, // Level from 0-100
  category: "Language" // or "Web", "Tool", "Other"
};

// Experience Data Structure
export const Experience = {
  id: 1,
  title: "Experience Title",
  company: "Company Name",
  period: "Start Date - End Date",
  description: "Experience Description",
  logo: "Company Logo URL (optional)"
};

// Certification Data Structure
export const Certification = {
  id: 1,
  title: "Certification Title",
  issuer: "Issuer Name",
  date: "Certification Date",
  link: "Certification Link (optional)",
  logo: "Issuer Logo URL (optional)"
};
