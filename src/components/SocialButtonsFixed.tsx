import { Linkedin, Twitter, Instagram } from "lucide-react";

const SocialButtonsFixed = () => {
  const socials = [
    { icon: Linkedin, href: "https://linkedin.com/in/amal-nath-vj-656213287", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/vj_2727", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/__vj_._", label: "Instagram" },
  ];

  return (
    <div 
      style={{
        position: 'fixed',
        right: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}
      className="hidden xl:flex"
    >
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label}
          className="group relative w-12 h-12 rounded-full bg-purple-50 border-2 border-purple-200 flex items-center justify-center transition-all duration-500 hover:border-purple-500 hover:bg-purple-500 text-purple-600 hover:text-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-purple-500/25 hover:scale-150 hover:shadow-xl hover:shadow-purple-500/30"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Icon className="w-5 h-5 transition-all duration-500 relative z-10 group-hover:scale-110" />
          
          {/* Large glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 scale-0 group-hover:scale-[2] transition-all duration-700 opacity-0 group-hover:opacity-100 blur-md"></div>
        </a>
      ))}
    </div>
  );
};

export default SocialButtonsFixed;
