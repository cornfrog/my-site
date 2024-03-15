"use client"

export default function Connect() {

    const goToLinkedIn = () => {
        return window.location.href = 'https://www.linkedin.com/in/coreypierce-/';
    }

    const goToGitHub = () => {
        return window.location.href = 'https://github.com/cornfrog';
    }

    return (
        <div className="connection-section">
            <p className="connection-title">Connect with me here 👉</p>
            <div className="connection-links">
                <img src="linkedin-svgrepo-com.svg" alt="linkedin-connect-link" className="connection-image" onClick={goToLinkedIn} />
                <img src="github-svgrepo-com.svg" alt="github-connect-link" className="connection-image" onClick={goToGitHub} />
            </div>
        </div>
    );
}