export const Footer = ({ logo, title }) => {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-8 text-white py-4 prose prose-invert">
        <div>
          <a href="https://nef1.org/site-policies/">Site Policies</a>
          <p>
            © 2023 National Energy Foundation <br />
            <strong>Energy Safe Kids</strong> is a Think! Energy program of the
            National Energy Foundation.{" "}
          </p>
          <p>
            ENERGY SAFE KIDS and all related characters and elements shown on
            this website are registered or unregistered trademarks of the
            National Energy Foundation.
          </p>
          &nbsp;&nbsp;&nbsp;<p></p>
        </div>
      </div>
    </div>
  );
};
