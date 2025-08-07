import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactRequestSchema, type InsertContactRequest } from "@shared/schema";
import { COMPANY_INFO, PRODUCTS } from "@/lib/constants";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactRequestSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      productType: "",
      description: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContactRequest) => {
      setIsSubmitting(true);
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте еще раз или свяжитесь с нами по телефону.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertContactRequest) => {
    submitContactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-white" data-testid="contact-page">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6" data-testid="contact-title">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-gray-600" data-testid="contact-subtitle">
            Готовы обсудить ваш проект? Мы всегда на связи
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6" data-testid="contact-form-title">
              Получить расчет стоимости
            </h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    placeholder="Введите ваше имя"
                    {...form.register("name")}
                    className="w-full"
                    data-testid="input-name"
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (xxx) xxx-xx-xx"
                    {...form.register("phone")}
                    className="w-full"
                    data-testid="input-phone"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...form.register("email")}
                  className="w-full"
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="productType">Тип изделия</Label>
                <Select onValueChange={(value) => form.setValue("productType", value)} data-testid="select-product-type">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите тип изделия" />
                  </SelectTrigger>
                  <SelectContent>
                    {PRODUCTS.map((product) => (
                      <SelectItem key={product.id} value={product.name}>
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.productType && (
                  <p className="text-sm text-red-500">{form.formState.errors.productType.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Описание проекта</Label>
                <Textarea
                  id="description"
                  rows={4}
                  placeholder="Опишите ваш проект, требования и особенности"
                  {...form.register("description")}
                  className="w-full"
                  data-testid="textarea-description"
                />
                {form.formState.errors.description && (
                  <p className="text-sm text-red-500">{form.formState.errors.description.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isSubmitting}
                data-testid="button-submit-form"
              >
                <Send className="mr-2 w-5 h-5" />
                {isSubmitting ? "Отправляем..." : "Отправить заявку"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6" data-testid="contact-info-title">
                Контактная информация
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4" data-testid="contact-address">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Адрес</div>
                    <div className="text-gray-600">{COMPANY_INFO.address}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4" data-testid="contact-phone">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Телефоны</div>
                    <div className="text-gray-600 space-y-1">
                      {COMPANY_INFO.phones.map((phone, index) => (
                        <div key={index}>{phone}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4" data-testid="contact-email">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Email</div>
                    <div className="text-gray-600">{COMPANY_INFO.email}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4" data-testid="contact-hours">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Clock className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Режим работы</div>
                    <div className="text-gray-600">{COMPANY_INFO.workingHours}</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gray-50 p-6" data-testid="quick-contact-card">
              <CardContent className="p-0">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Быстрая связь</h4>
                <div className="flex space-x-4">
                  <Button 
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    data-testid="button-whatsapp"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp
                  </Button>
                  <Button 
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                    data-testid="button-telegram"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Telegram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
