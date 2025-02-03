import React, { useState } from "react";

const Captcha = ({ onVerify }) => {
  const [isVerified, setIsVerified] = useState(false);

  const handleCaptchaResponse = (token) => {
    if (token) {
      setIsVerified(true);
      onVerify(token);
    }
  };

  return (
    <div className="mt-4">
      <div
        className="g-recaptcha"
        data-sitekey="6LfTjcsqAAAAAOuE2FEqpQC0C2Ag1tj7AklWRCHF"
        data-callback={handleCaptchaResponse}
      ></div>

      {isVerified ? (
        <p className="text-green-500 text-sm mt-2">Captcha verified ✅</p>
      ) : (
        <p className="text-red-500 text-sm mt-2">Please verify the Captcha!</p>
      )}
    </div>
  );
};

export default Captcha;
