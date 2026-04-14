import type { Module } from '../../types'

const m16: Module = {
  title: "16. Database Systems",
  titleBn: "১৬. ডেটাবেস সিস্টেম",
  level: "Advanced",
  lessons: [
    {
      id: "db1",
      title: "Database Fundamentals",
      content: "Database: Organized collection of data.\n\nDBMS: Database Management System.\n\nArchitecture:\n• External: User view\n• Conceptual: Logical structure\n• Internal: Physical storage\n\nData Models:\n• Relational: Tables with rows/columns\n• Hierarchical: Tree structure\n• Network: Graph structure\n• Object-oriented: Objects with methods\n\nER Model:\n• Entity: Real-world object\n• Attribute: Entity property\n• Relationship: Entity associations\n• Key: Unique identifier\n\nKeys:\n• Primary: Unique identifier\n• Foreign: References another table\n• Candidate: Potential primary\n• Composite: Multiple attributes",
      takeaways: [
        "DBMS provides data management",
        "Relational model uses tables",
        "ER modeling visualizes database design",
        "Keys ensure data uniqueness and relationships"
      ],
      level: "Advanced"
    },
    {
      id: "db2",
      title: "SQL and Normalization",
      content: "SQL: Structured Query Language.\n\nCommands:\n• DDL: CREATE, ALTER, DROP\n• DML: SELECT, INSERT, UPDATE, DELETE\n• DCL: GRANT, REVOKE\n\nJoins:\n• Inner: Matching rows\n• Left: All left + matching right\n• Right: All right + matching left\n• Full: All rows\n\nNormalization: Organize to reduce redundancy.\n\nForms:\n• 1NF: Atomic values\n• 2NF: No partial dependency\n• 3NF: No transitive dependency\n• BCNF: Stronger 3NF\n\nTransaction (ACID):\n• Atomic: All or nothing\n• Consistent: Valid state\n• Isolated: Concurrent independent\n• Durable: Permanent after commit",
      code: "SELECT name FROM employees WHERE dept = 'IT' ORDER BY salary DESC;",
      takeaways: [
        "SQL queries retrieve and manipulate data",
        "Joins combine tables based on relationships",
        "Normalization reduces data redundancy",
        "ACID ensures reliable transactions"
      ],
      level: "Advanced"
    },
    {
      id: "db3",
      title: "Query Optimization and Recovery",
      content: "Query Optimization: Choose most efficient execution plan.\n\nTechniques:\n• Use indexes\n• Avoid SELECT *\n• Use joins efficiently\n• Avoid subqueries when possible\n• Use proper join types\n\nCost Model: I/O, CPU, communication.\n\nConcurrency Control: Handle simultaneous access.\n\nProblems:\n• Dirty Read: Read uncommitted data\n• Lost Update: Both updates, one lost\n• Non-repeatable Read: Different reads\n\nSolutions:\n• Locking: Shared/Exclusive\n• Two-Phase Locking (2PL)\n• Timestamp ordering\n\nRecovery:\n• Log-based: Write-ahead logging\n• Checkpoint: Periodic snapshots\n• Backup: Full, incremental, differential\n\nIsolation Levels:\n• Read Uncommitted, Read Committed, Repeatable Read, Serializable",
      takeaways: [
        "Optimizer evaluates execution plans",
        "Locks prevent concurrent access issues",
        "Logging enables recovery from failures",
        "Isolation levels trade performance for consistency"
      ],
      level: "Advanced"
    }
  ]
}

const m17: Module = {
  title: "17. Software Engineering",
  titleBn: "১৭. সফটওয়্যার ইঞ্জিনিয়ারিং",
  level: "Advanced",
  lessons: [
    {
      id: "se1",
      title: "SDLC and Design",
      content: "Software Engineering: Systematic approach to software development.\n\nSDLC Phases:\n1. Requirements: Gather and analyze\n2. Design: System architecture\n3. Implementation: Coding\n4. Testing: Verify functionality\n5. Deployment: Release to users\n6. Maintenance: Updates and fixes\n\nModels:\n• Waterfall: Sequential phases\n• Agile: Iterative, flexible\n• Spiral: Risk-driven\n• V-Model: Testing integrated\n\nDesign Principles:\n• Abstraction: Hide details\n• Encapsulation: Bundle data/methods\n• Modularity: Separate concerns\n• Coupling: Dependency between modules\n• Cohesion: Internal relatedness\n\nDesign Patterns:\n• Creational: Object creation (Factory, Singleton)\n• Structural: Structure (Adapter, Decorator)\n• Behavioral: Behavior (Observer, Strategy)",
      takeaways: [
        "SDLC provides structured development process",
        "Agile emphasizes iterative development",
        "Low coupling and high cohesion are goals",
        "Design patterns solve common problems"
      ],
      level: "Advanced"
    },
    {
      id: "se2",
      title: "Testing and Project Management",
      content: "Testing: Verify software works correctly.\n\nLevels:\n• Unit: Individual components\n• Integration: Combined parts\n• System: Complete system\n• Acceptance: User validation\n\nTypes:\n• Black-box: No internal knowledge\n• White-box: Internal structure known\n• Regression: After changes\n\nTechniques:\n• Functional: Requirements-based\n• Performance: Load, stress\n• Security: Vulnerability check\n\nProject Management:\n• Planning: Tasks, timeline\n• Estimation: Effort, cost\n• Risk: Identify and mitigate\n• Quality: Standards compliance\n\nMetrics:\n• LOC: Lines of code\n• Function Points: Functionality measure\n• Cyclomatic Complexity: Code complexity",
      takeaways: [
        "Testing verifies correct functionality",
        "Multiple levels test different aspects",
        "Risk management identifies potential issues",
        "Metrics measure project progress and quality"
      ],
      level: "Advanced"
    }
  ]
}

const m18: Module = {
  title: "18. Operating System",
  titleBn: "১৮. অপারেটিং সিস্টেম",
  level: "Advanced",
  lessons: [
    {
      id: "os1",
      title: "OS Fundamentals",
      content: "Operating System: Interface between user and hardware.\n\nGoals:\n• Convenience: Easy to use\n• Efficiency: Resource utilization\n• Evolution: Allow changes\n\nFunctions:\n• Process Management: Create, schedule, terminate\n• Memory Management: Allocate, deallocate\n• File Management: Store, retrieve, protect\n• Device Management: Drivers, I/O\n• Security: Protection, authentication\n\nTypes:\n• Batch: Process jobs in batches\n• Time-sharing: Multiple users\n• Real-time: Immediate response\n• Distributed: Multiple machines\n\nProcess: Executing program.\n\nStates: New, Ready, Running, Waiting, Terminated.\n\nScheduling:\n• FCFS: First come first served\n• SJF: Shortest job first\n• Round Robin: Time slice\n• Priority: Based on priority",
      takeaways: [
        "OS manages hardware resources",
        "Process states: new, ready, running, waiting, terminated",
        "CPU scheduling decides execution order",
        "Types include batch, time-sharing, real-time"
      ],
      level: "Advanced"
    },
    {
      id: "os2",
      title: "Memory and File Systems",
      content: "Memory Management:\n\nTechniques:\n• Contiguous: Single block allocation\n• Non-contiguous: Multiple blocks\n• Paging: Fixed-size pages\n• Segmentation: Variable segments\n\nVirtual Memory:\n• Pages in RAM + on disk\n• Page table maps virtual to physical\n• TLB speeds up translation\n\nPage Replacement:\n• FIFO: Oldest page out\n• LRU: Least recently used\n• Optimal: Future reference prediction\n\nFile System:\n• File: Named collection of data\n• Directory: Organizes files\n• Allocation: Contiguous, Linked, Indexed\n\nFile Access:\n• Sequential: Start to end\n• Direct: Any location\n\nI/O Management:\n• Buffers: Temporary storage\n• Caching: Fast access copy\n• Spooling: Queue for devices",
      takeaways: [
        "Virtual memory extends available space",
        "Page replacement algorithms manage memory",
        "File systems organize and store data",
        "I/O management optimizes device access"
      ],
      level: "Advanced"
    }
  ]
}

const m19: Module = {
  title: "19. Artificial Intelligence",
  titleBn: "১৯. আর্টিফিসিয়াল ইন্টেলিজেন্স",
  level: "Advanced",
  lessons: [
    {
      id: "ai1",
      title: "AI Fundamentals",
      content: "Artificial Intelligence: Machines mimicking human intelligence.\n\nTypes:\n• Narrow AI: Specific tasks\n• General AI: Any cognitive task\n• Super AI: Surpass human intelligence\n\nApproaches:\n• Symbolic: Rules and logic\n• Statistical: Probability and data\n• Connectionist: Neural networks\n\nSearch:\n• Uninformed: BFS, DFS, Uniform-cost\n• Informed: A*, Greedy\n\nKnowledge Representation:\n• Propositional Logic\n• Predicate Logic\n• Frames\n• Semantic Networks\n\nPlanning:\n• State-space search\n• Partial-order planning\n• Hierarchical task network",
      takeaways: [
        "AI mimics human cognitive functions",
        "Search algorithms solve problems systematically",
        "Knowledge representation captures information",
        "Planning generates action sequences"
      ],
      level: "Advanced"
    },
    {
      id: "ai2",
      title: "Machine Learning",
      content: "Machine Learning: Systems learning from data.\n\nTypes:\n• Supervised: Labeled data\n• Unsupervised: No labels\n• Reinforcement: Trial and error\n\nAlgorithms:\n• Regression: Continuous output\n• Classification: Discrete output\n• Clustering: Group similar\n• Decision Trees: Rule-based\n• Neural Networks: Inspired by brain\n\nDeep Learning:\n• Neural networks with many layers\n• CNN: Image processing\n• RNN: Sequential data\n• Transformers: Natural language\n\nEvaluation:\n• Accuracy, Precision, Recall\n• F1-Score\n• Confusion Matrix\n\nOverfitting: Model memorizes training data.\nUnderfitting: Model too simple.",
      code: "accuracy = (TP + TN) / (TP + TN + FP + FN)\nprecision = TP / (TP + FP)\nrecall = TP / (TP + FN)",
      takeaways: [
        "ML enables systems to learn from data",
        "Supervised, unsupervised, and reinforcement learning",
        "Neural networks process complex patterns",
        "Proper evaluation prevents over/underfitting"
      ],
      level: "Advanced"
    }
  ]
}

export const modules: Module[] = [m16, m17, m18, m19]
