import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  variant?: "fixed" | "inline";
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Hello, I would like to inquire about your services.",
  className = "",
  variant = "fixed"
}: WhatsAppButtonProps) => {
  const cleanNumber = phoneNumber.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  if (variant === "fixed") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-primary-foreground rounded text-sm font-medium hover:bg-[#20BD5A] transition-colors ${className}`}
    >
      <MessageCircle className="w-4 h-4" />
      WhatsApp
    </a>
  );
};

export default WhatsAppButton;
