import React from 'react';

function ContactDetails() {
    return (
        <div style={{
            backgroundImage: "url(img9.avif)",
            backgroundSize: "cover",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px"
        }}>
            <div>
                <h1 style={{ textAlign: "center", color: "black", marginTop: "20px" }}>CONTACT DETAILS</h1>
                <p style={{ textAlign: "center", color: "black" }}>
                    Welcome to our college contact page. Here are some ways to get in touch with us:
                </p>
                <ul style={{ textAlign: "left", color: "royal blue" }}>
                    <li>Main Phone Number: +1-123-456-7890</li>
                    <li>Email: info@college.edu</li>
                    <li>Address: 123 College Ave, City, State, Zip Code</li>
                    <li>Social Media: <a href="https://facebook.com/college">Facebook</a>, <a href="https://twitter.com/college">Twitter</a>, <a href="https://instagram.com/college">Instagram</a></li>
                </ul>
            </div>
            <div>
                <p style={{ textAlign: "center", color: "black" }}>
                    Feel free to reach out to us for any inquiries or more information about our programs and services.
                </p>
            </div>
        </div>
    );
}

export default ContactDetails;