"use client"

export default function Connect() {

    const goToLinkedIn = () => {
        return window.location.href='https://www.linkedin.com/in/coreypierce-/';
    }

    const goToGitHub = () => { 
        return window.location.href='https://github.com/cornfrog';
    }

    return (
        <div className="connection-links">
            <p>Connect with me here 👉</p>
            <img src="linkedin-svgrepo-com.svg" alt="linkedin-connect-link" className="connection-image" onClick={goToLinkedIn}/>
            <img src="github-svgrepo-com.svg" alt="github-connect-link" className="connection-image" onClick={goToGitHub}/>
        </div>
    );
}