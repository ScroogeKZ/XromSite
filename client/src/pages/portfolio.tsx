import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Clock, Users, CheckCircle } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof PORTFOLIO_PROJECTS[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: typeof PORTFOLIO_PROJECTS[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-100" data-testid="portfolio-page">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6" data-testid="portfolio-title">
            Наши проекты
          </h1>
          <p className="text-xl text-gray-600" data-testid="portfolio-description">
            Примеры выполненных работ высочайшего качества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project) => (
            <Card 
              key={project.id} 
              className="bg-white overflow-hidden group hover:shadow-2xl transition-all duration-300"
              data-testid={`project-card-${project.id}`}
            >
              <div 
                className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundImage: `url(${project.image})` }}
                data-testid={`project-image-${project.id}`}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2" data-testid={`project-name-${project.id}`}>
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500" data-testid={`project-year-${project.id}`}>
                    {project.year}
                  </span>
                  <Button 
                    variant="link" 
                    className="text-primary hover:text-primary/80 font-semibold p-0"
                    onClick={() => openProjectModal(project)}
                    data-testid={`project-details-${project.id}`}
                  >
                    Подробнее <ExternalLink className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4" data-testid="view-all-projects">
            Смотреть все проекты
          </Button>
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6" data-testid="portfolio-process-title">
            Процесс работы с проектами
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center" data-testid="process-step-1">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">1</div>
              <h3 className="font-semibold mb-2">Консультация</h3>
              <p className="text-gray-600 text-sm">Обсуждение требований и технических особенностей</p>
            </div>
            <div className="text-center" data-testid="process-step-2">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">2</div>
              <h3 className="font-semibold mb-2">Проектирование</h3>
              <p className="text-gray-600 text-sm">Разработка технических чертежей и 3D-моделей</p>
            </div>
            <div className="text-center" data-testid="process-step-3">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">3</div>
              <h3 className="font-semibold mb-2">Производство</h3>
              <p className="text-gray-600 text-sm">Изготовление изделий на современном оборудовании</p>
            </div>
            <div className="text-center" data-testid="process-step-4">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">4</div>
              <h3 className="font-semibold mb-2">Монтаж</h3>
              <p className="text-gray-600 text-sm">Профессиональная установка и сдача объекта</p>
            </div>
          </div>
        </div>

        {/* Project Details Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedProject.name}
                  </DialogTitle>
                  <DialogDescription className="text-lg text-gray-600 mb-4">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Project Image */}
                  <div 
                    className="h-64 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${selectedProject.image})` }}
                  />
                  
                  {/* Project Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="text-primary w-5 h-5" />
                      <div>
                        <p className="text-sm text-gray-500">Год выполнения</p>
                        <p className="font-semibold">{selectedProject.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="text-primary w-5 h-5" />
                      <div>
                        <p className="text-sm text-gray-500">Длительность</p>
                        <p className="font-semibold">{selectedProject.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="text-primary w-5 h-5" />
                      <div>
                        <p className="text-sm text-gray-500">Статус</p>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Завершен
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Detailed Description */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Описание проекта</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>
                  
                  {/* Materials */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Используемые материалы</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.materials.map((material, index) => (
                        <Badge key={index} variant="outline" className="border-primary text-primary">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Services */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Выполненные работы</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="text-green-600 w-4 h-4 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Client Feedback */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Отзыв клиента</h3>
                    <p className="text-gray-700 italic leading-relaxed">
                      "{selectedProject.clientFeedback}"
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-end space-x-4 pt-6 border-t">
                    <Button variant="outline" onClick={closeModal}>
                      Закрыть
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90">
                      Обсудить проект
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
