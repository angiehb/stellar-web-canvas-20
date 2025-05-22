
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Angie Hanna-Bugueiro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
