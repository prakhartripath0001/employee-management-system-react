const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create a modern, high-converting homepage design for our SaaS product, ensuring perfect responsive layout and smooth animations.",
        taskDate: "2026-05-30",
        category: "Design",
        priority: "high"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Backup Setup",
        "taskDescription": "Configure and test automated nightly backups for the PostgreSQL database cluster with off-site S3 storage replication.",
        taskDate: "2026-06-01",
        category: "Dev",
        priority: "medium"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Header Layout",
        taskDescription: "Resolve navigation layout clipping issues on Safari and mobile browser viewports.",
        taskDate: "2026-05-28",
        category: "CSS",
        priority: "low"
      }
    ]
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Stripe API Integration",
        taskDescription: "Implement webhook endpoints to handle subscription renewal events and update customer status in real-time.",
        taskDate: "2026-05-31",
        category: "Dev",
        priority: "high"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Auth Unit Tests",
        taskDescription: "Create unit tests using Vitest covering multi-factor authentication setup and token expiration checks.",
        taskDate: "2026-06-03",
        category: "Testing",
        priority: "medium"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "AWS Amplify Deployment",
        taskDescription: "Configure Continuous Deployment from main branch to AWS environment.",
        taskDate: "2026-05-25",
        category: "DevOps",
        priority: "high"
      }
    ]
  },
  {
    id: 3,
    firstName: "Ananya",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Audit search engine visibility, meta tags, and structured schema implementation for blog posts.",
        taskDate: "2026-06-02",
        category: "Marketing",
        priority: "medium"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "New Hire Onboarding",
        taskDescription: "Prepare onboarding documents and set up workspace access for the incoming front-end engineer.",
        taskDate: "2026-06-05",
        category: "HR",
        priority: "low"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Newsletter Campaign",
        taskDescription: "Design, write, and schedule the monthly developer newsletter for June 2026.",
        taskDate: "2026-05-27",
        category: "Marketing",
        priority: "medium"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Prakhar",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(employees));
  }
  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const storedEmployees = JSON.parse(localStorage.getItem('employees'));
  const storedAdmin = JSON.parse(localStorage.getItem('admin'));
  return { employees: storedEmployees, admin: storedAdmin };
};
