import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import Github from "./assets/SVG/github";

const Project1 = () => {
    return(
        <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-t-lg"></div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">E-Commerce Platform</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  A modern e-commerce solution built with Next.js, featuring real-time inventory, payment processing,
                  and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Stripe
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    PostgreSQL
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Github/>
                    Code
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
    )
}

const Project2 = () => {
    return(
        <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg"></div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Task Management App</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  A collaborative task management tool with real-time updates, team workspaces, and advanced filtering
                  capabilities.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Socket.io
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    MongoDB
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Github/>
                    Code
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
    )
}

const Project3 = () => {
    return(
        <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg"></div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Analytics Dashboard</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  A comprehensive analytics platform with interactive charts, real-time data visualization, and custom
                  reporting features.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    Vue.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    D3.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Python
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Github/>
                    Code
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
    )
}




export { Project1, Project2, Project3 };