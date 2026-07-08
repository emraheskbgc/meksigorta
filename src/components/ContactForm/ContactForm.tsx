"use client";

import { useState } from "react";

import ContactInput from "./ContactInput";
import ContactSelect from "./ContactSelect";
import ContactTextarea from "./ContactTextarea";
import ContactCheckbox from "./ContactCheckbox";
import SubmitButton from "./SubmitButton";

import { toast } from "sonner";

import type { ContactFormData } from "@/types/contact";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phone: "",
    tcIdentity: "",
    email: "",
    insuranceType: "",
    birthDate: "",
    message: "",
    privacyAccepted: false,
  });

  const [loading, setLoading] = useState(false);

 

  // Kullanıcı inputta bir şey değiştirince çalışacak fonksiyon
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (event.target as HTMLInputElement).checked
          : value,
    }));
  };

  const insuranceOptions = [
    { value: "trafik", label: "Trafik Sigortası" },
    { value: "kasko", label: "Kasko Sigortası" },
    { value: "tamamlayici", label: "Tamamlayıcı Sağlık Sigortası" },
    { value: "ozel-saglik", label: "Özel Sağlık Sigortası" },
    { value: "konut", label: "Konut Sigortası" },
    { value: "dask", label: "DASK" },
    { value: "isyeri", label: "İşyeri Sigortası" },
    { value: "seyahat", label: "Seyahat Sigortası" },
    { value: "diger", label: "Diğer" },
  ];

// kullanıcı formu boş geçmemesi için 

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      return "Lütfen ad soyadınızı giriniz.";
    }
  
    if (!formData.phone.trim()) {
      return "Lütfen telefon numaranızı giriniz.";
    }
  
    if (!formData.privacyAccepted) {
      return "KVKK onayını kabul etmelisiniz.";
    }
  
    return null;
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
  
    const validationError = validateForm();
  
    if (validationError) {
      toast.error(validationError);
      return;
    }   
  
    try {
      setLoading(true);
      
      const res = await fetch("/api/contact", {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message);
      }

      toast.success(result.message);
  
      setFormData({
        fullName: "",
        phone: "",
        tcIdentity: "",
        email: "",
        insuranceType: "",
        birthDate: "",
        message: "",
        privacyAccepted: false,
      });
    } catch (error) {
      toast.error("Bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-backColor py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-text1">Hızlı Teklif Al</h2>

            <p className="mt-3 text-text2">
              Formu doldurun, uzman ekibimiz en kısa sürede sizinle iletişime
              geçsin.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ContactInput
                id="fullName"
                name="fullName"
                label="Ad Soyad"
                placeholder="Ad Soyad"
                required
                value={formData.fullName}
                onChange={handleChange}
              />

              <ContactInput
                id="phone"
                name="phone"
                label="Telefon"
                type="tel"
                placeholder="05xx xxx xx xx"
                required
                value={formData.phone}
                onChange={handleChange}
              />

              <ContactInput
                id="tcIdentity"
                name="tcIdentity"
                label="T.C. Kimlik No"
                placeholder="11 haneli T.C. Kimlik Numaranız"
                value={formData.tcIdentity}
                onChange={handleChange}
              />

              <ContactInput
                id="email"
                name="email"
                label="E-Posta"
                type="email"
                placeholder="ornek@mail.com"
                value={formData.email}
                onChange={handleChange}
              />

              <ContactInput
                id="birthDate"
                name="birthDate"
                label="Doğum Tarihi"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
              />

              <ContactSelect
                id="insuranceType"
                name="insuranceType"
                label="Sigorta Ürünü"
                value={formData.insuranceType}
                options={insuranceOptions}
                onChange={handleChange}
              />

              <div className="md:col-span-2">
                <ContactTextarea
                  id="message"
                  name="message"
                  label="Mesaj"
                  placeholder="Mesajınızı yazabilirsiniz..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-2">
                <ContactCheckbox
                  id="privacyAccepted"
                  name="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={handleChange}
                  required
                  label="Kişisel verilerimin KVKK kapsamında işlenmesini kabul ediyorum."
                />
              </div>

              <div className="md:col-span-2">
                
                <SubmitButton loading={loading}>Teklif Al</SubmitButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
