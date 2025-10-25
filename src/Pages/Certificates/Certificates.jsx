import "./Certificates.css";
import certificateImage from "../../assets/images/istockphoto.jpg";

export default function Certificates() {
  return (
    <section className="certificate-section">
      <div className="certificate_image_wrapper">
        <img src={certificateImage} className="certificate_image" alt="" />
      </div>
      <div className="container certificate_wrapper">
        <div className="">
          <h1 className="certificate_title">Verify Certificate</h1>
        </div>
        <div className="certificate_text">
          Please enter your certificate No. to validate your certificate. Please
          contact us in case of any discrepancy.
        </div>
        <div className="verify-certificate">
          <h3 className="certificate_text_input">Certificate Number</h3>

          <div className="certificate_input_wrapper">
            <input
              className="certificate_input"
              type="text"
              name=""
              id=""
              placeholder="XXXX"
            />
            <input
              className="certificate_submit"
              type="submit"
              value="Verify"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
