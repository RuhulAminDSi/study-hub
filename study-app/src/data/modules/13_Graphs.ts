import type { Module } from '../../types'

const m13: Module = {
  title: "13. Graphs",
  titleBn: "১৩. গ্রাফ তত্ত্ব",
  level: "Intermediate",
  lessons: [
    {
      id: "gr1",
      title: "Graph Fundamentals",
      titleBn: "গ্রাফের মৌলিক ধারণা",
      content: "Graph: G = (V, E) where V = vertices, E = edges.\n\nTypes:\n• Simple: No loops, no multiple edges\n• Multi: Multiple edges allowed\n• Directed: Edges have direction\n• Undirected: Edges bidirectional\n\nSpecial Graphs:\n• Complete (Kn): Every pair connected\n• Cycle (Cn): Closed loop\n• Path: Sequence of vertices\n• Tree: Connected, no cycles\n• Bipartite: V partitioned, edges between parts\n\nGraph Representation:\n• Adjacency Matrix: O(V²) space\n• Adjacency List: O(V+E) space\n\nDegree: Number of edges incident.\n• In-degree: Incoming edges\n• Out-degree: Outgoing edges\n\nHandshaking Lemma: Sum of degrees = 2|E|",
      contentBn: "গ্রাফ: G = (V, E) যেখানে V = ভার্টেক্স, E = এজ।\n\nপ্রকার:\n• সিম্পল: লুপ নেই, একাধিক এজ নেই\n• মাল্টি: একাধিক এজ অনুমোদিত\n• ডিরেক্টেড: এজের দিক আছে\n• আনডিরেক্টেড: এজ দ্বিমুখী\n\nবিশেষ গ্রাফ:\n• কমপ্লিট (Kn): প্রতিটি জোড়া সংযুক্ত\n• সাইকেল (Cn): বন্ধ লুপ\n• পাথ: শীর্ষবিন্দুর ক্রম\n• ট্রি: সংযুক্ত, কোনো চক্র নেই\n• বাইপার্টাইট: V বিভক্ত, অংশের মধ্যে এজ\n\nগ্রাফ উপস্থাপন:\n• অ্যাডজেসেন্সি ম্যাট্রিক্স: O(V²) স্থান\n• অ্যাডজেসেন্সি লিস্ট: O(V+E) স্থান\n\nডিগ্রি: ইনসিডেন্ট এজের সংখ্যা।\n• ইন-ডিগ্রি: আসা এজ\n• আউট-ডিগ্রি: যাওয়া এজ\n\nহ্যান্ডশেকিং লেমা: ডিগ্রির যোগফল = 2|E|",
      takeaways: [
        "Graphs consist of vertices and edges",
        "Directed vs undirected edges matter",
        "Adjacency list is efficient for sparse graphs",
        "Handshaking lemma relates degrees to edges"
      ],
      takeawaysBn: [
        "গ্রাফ শীর্ষবিন্দু ও এজ নিয়ে গঠিত",
        "ডিরেক্টেড বনাম আনডিরেক্টেড এজ গুরুত্বপূর্ণ",
        "স্পার্স গ্রাফের জন্য অ্যাডজেসেন্সি লিস্ট দক্ষ",
        "হ্যান্ডশেকিং লেমা ডিগ্রিকে এজের সাথে সম্পর্কিত করে"
      ],
      level: "Intermediate"
    },
    {
      id: "gr2",
      title: "Graph Algorithms",
      titleBn: "গ্রাফ অ্যালগরিদম",
      content: "Traversal:\n• BFS: Level-order using queue\n• DFS: Depth-order using stack/recursion\n\nConnectivity:\n• Connected: Path between all pairs\n• Components: Maximal connected subgraphs\n• Strongly connected (digraph): Bidirectional paths\n\nShortest Path:\n• Dijkstra: Weighted, positive weights\n• Bellman-Ford: Handles negative weights\n• BFS: Unweighted\n\nMinimum Spanning Tree:\n• Prim: Grow from one vertex\n• Kruskal: Sort edges, add if no cycle\n\nTopological Sort: Order for DAG (Directed Acyclic Graph).\n\nCycle Detection:\n• DFS: Back edge detection\n• Union-Find: Detect cycle in undirected",
      contentBn: "ট্রাভার্সাল:\n• BFS: কিউ ব্যবহার করে লেভেল-অর্ডার\n• DFS: স্ট্যাক/রিকার্সন ব্যবহার করে ডেপথ-অর্ডার\n\nসংযোগ:\n• সংযুক্ত: সব জোড়ার মধ্যে পাথ\n• কম্পোনেন্টস: সর্বোচ্চ সংযুক্ত সাবগ্রাফ\n• স্ট্রংলি সংযুক্ত (ডাইগ্রাফ): দ্বিমুখী পাথ\n\nসর্টেস্ট পাথ:\n• Dijkstra: ওয়েটেড, ধনাত্মক ওয়েট\n• Bellman-Ford: ঋণাত্মক ওয়েট হ্যান্ডেল করে\n• BFS: আনওয়েটেড\n\nমিনিমাম স্প্যানিং ট্রি:\n• Prim: এক শীর্ষবিন্দু থেকে বড় হয়\n• Kruskal: এজ সর্ট করে, চক্র না হলে যোগ করে\n\nটোপোলজিকাল সর্ট: DAG এর জন্য ক্রম (ডিরেক্টেড অ্যাসাইক্লিক গ্রাফ)।\n\nচক্র সনাক্তকরণ:\n• DFS: ব্য��ক ��জ সনাক্তকরণ\n• Union-Find: আনডিরেক্টেড গ্রাফে চক্র সনাক্ত করে",
      code: "BFS: Queue based level traversal\nDFS: Stack/recursion based depth traversal",
      takeaways: [
        "BFS finds shortest path in unweighted graphs",
        "DFS explores depth before breadth",
        "Dijkstra finds shortest weighted path",
        "MST connects all vertices with minimum total weight"
      ],
      takeawaysBn: [
        "BFS আনওয়েটেড গ্রাফে সর্টেস্ট পাথ খুঁজে পায়",
        "DFS প্রস্থের আগে গভীরতা অন্বেষণ করে",
        "Dijkstra সর্টেস্ট ওয়েটেড পাথ খুঁজে পায়",
        "MST সব শীর্ষবিন্দু ন্যূনতম মোট ওয়েট দিয়ে সংযুক্ত করে"
      ],
      level: "Advanced"
    }
  ]
}

export const module13 = m13