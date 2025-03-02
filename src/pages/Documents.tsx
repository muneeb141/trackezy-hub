import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Filter, 
  Plus, 
  FolderPlus, 
  Upload, 
  Download,
  FileUp,
  Grid,
  List
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTransition } from '@/components/ui/PageTransition';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

// Sample document data
const initialDocuments = [
  {
    id: '1',
    title: 'Project Requirements.docx',
    type: 'doc',
    size: '145 KB',
    modified: '2023-05-15',
    owner: { id: '1', name: 'John Doe' },
    tags: ['requirements', 'project'],
    project: 'Design System',
  },
  {
    id: '2',
    title: 'UI Mockups.fig',
    type: 'design',
    size: '4.2 MB',
    modified: '2023-05-18',
    owner: { id: '2', name: 'Jane Smith' },
    tags: ['design', 'ui'],
    project: 'Mobile App',
  },
  {
    id: '3',
    title: 'API Documentation.pdf',
    type: 'pdf',
    size: '2.1 MB',
    modified: '2023-05-20',
    owner: { id: '3', name: 'Mike Johnson' },
    tags: ['api', 'documentation'],
    project: 'Backend Services',
  },
  {
    id: '4',
    title: 'Sprint Planning.xlsx',
    type: 'spreadsheet',
    size: '578 KB',
    modified: '2023-05-22',
    owner: { id: '1', name: 'John Doe' },
    tags: ['planning', 'sprint'],
    project: 'Project Management',
  },
  {
    id: '5',
    title: 'Design System Guide.pdf',
    type: 'pdf',
    size: '3.5 MB',
    modified: '2023-05-25',
    owner: { id: '2', name: 'Jane Smith' },
    tags: ['design', 'guide'],
    project: 'Design System',
  },
  {
    id: '6',
    title: 'User Research Results.pptx',
    type: 'presentation',
    size: '2.8 MB',
    modified: '2023-05-28',
    owner: { id: '4', name: 'Sarah Williams' },
    tags: ['research', 'users'],
    project: 'UX Research',
  },
];

const typeIcons: Record<string, React.ReactNode> = {
  doc: <FileText className="text-blue-500" />,
  design: <FileText className="text-purple-500" />,
  pdf: <FileText className="text-red-500" />,
  spreadsheet: <FileText className="text-green-500" />,
  presentation: <FileText className="text-orange-500" />,
};

const typeColors: Record<string, string> = {
  doc: 'bg-blue-100 text-blue-800',
  design: 'bg-purple-100 text-purple-800',
  pdf: 'bg-red-100 text-red-800',
  spreadsheet: 'bg-green-100 text-green-800',
  presentation: 'bg-orange-100 text-orange-800',
};

type Document = {
  id: string;
  title: string;
  type: string;
  size: string;
  modified: string;
  owner: {
    id: string;
    name: string;
  };
  tags: string[];
  project: string;
};

type ViewMode = 'grid' | 'list';

const DocumentCard = ({ document }: { document: Document }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-3">
      <div className="flex items-center">
        {typeIcons[document.type]}
        <span className="ml-2 font-medium truncate">{document.title}</span>
      </div>
      <span className={cn('text-xs px-2 py-1 rounded-full', typeColors[document.type])}>
        {document.type}
      </span>
    </div>
    <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
      <div>Size: {document.size}</div>
      <div>Modified: {document.modified}</div>
      <div>Owner: {document.owner.name}</div>
    </div>
    <div className="flex flex-wrap gap-1 mt-2">
      {document.tags.map(tag => (
        <Badge key={tag} status="todo" className="bg-gray-100 text-gray-800">
          {tag}
        </Badge>
      ))}
    </div>
  </div>
);

const DocumentRow = ({ document }: { document: Document }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-3 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div className="flex items-center flex-1">
        {typeIcons[document.type]}
        <span className="ml-2 font-medium truncate">{document.title}</span>
      </div>
      <div className="hidden md:flex items-center gap-4 flex-1">
        <span className={cn('text-xs px-2 py-1 rounded-full', typeColors[document.type])}>
          {document.type}
        </span>
        <span className="text-sm text-gray-500">{document.size}</span>
      </div>
      <div className="hidden md:block text-sm text-gray-500 flex-1">{document.modified}</div>
      <div className="hidden md:block text-sm text-gray-500 flex-1">{document.owner.name}</div>
    </div>
  </div>
);

const Documents = () => {
  const [documents, setDocuments] = useState<Document[]>(initialDocuments);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Filter documents based on search term and selected project
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesProject = selectedProject ? doc.project === selectedProject : true;
    return matchesSearch && matchesProject;
  });

  // Get unique project names
  const projects = Array.from(new Set(documents.map(doc => doc.project)));

  // Handle file upload (this would connect to a backend in a real app)
  const handleFileUpload = () => {
    console.log('File upload functionality would be implemented here');
    // This would typically involve:
    // 1. Opening a file picker dialog
    // 2. Sending the selected file to a backend API
    // 3. Updating the documents state with the new document
  };

  return (
    <PageTransition>
      <div className="p-6 animate-fade-in">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h1 className="text-3xl font-bold">Documents</h1>
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative max-w-xs w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search documents..."
                  className="pl-8 h-9 w-full md:w-64 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-1 bg-muted rounded-md p-1">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={cn("h-8", viewMode === 'grid' && "bg-background")}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={cn("h-8", viewMode === 'list' && "bg-background")}
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              
              <select
                className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                value={selectedProject || ''}
                onChange={(e) => setSelectedProject(e.target.value || null)}
              >
                <option value="">All Projects</option>
                {projects.map(project => (
                  <option key={project} value={project}>{project}</option>
                ))}
              </select>
              
              <Button variant="outline" size="sm" className="h-9">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="h-9"
                onClick={handleFileUpload}
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </Button>
              
              <Button size="sm" className="h-9">
                <Plus className="h-4 w-4 mr-2" />
                New Folder
              </Button>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <FolderPlus className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Document Repository</h2>
            </div>
            
            {/* List Header - Only show in list view */}
            {viewMode === 'list' && (
              <div className="hidden md:flex items-center px-3 py-2 mb-2 font-medium text-sm text-muted-foreground">
                <div className="flex-1">Name</div>
                <div className="flex-1">Type & Size</div>
                <div className="flex-1">Modified</div>
                <div className="flex-1">Owner</div>
              </div>
            )}
            
            {/* Documents Grid or List */}
            <div className={cn(
              viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" 
                : "flex flex-col gap-2"
            )}>
              {filteredDocuments.length > 0 ? (
                filteredDocuments.map((doc) => (
                  viewMode === 'grid' 
                    ? <DocumentCard key={doc.id} document={doc} />
                    : <DocumentRow key={doc.id} document={doc} />
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-muted-foreground">
                  No documents found. Try a different search or upload a new document.
                </div>
              )}
            </div>
            
            {/* Pagination - In a real app, this would be functional */}
            <div className="flex justify-between items-center mt-6">
              <div className="text-sm text-muted-foreground">
                Showing {filteredDocuments.length} of {documents.length} documents
              </div>
              <div className="flex gap-1">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm" disabled>Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Documents;
