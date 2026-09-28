function TrustedBy() {
    const companies = [
        "NOTION",
        "LINEAR",
        "VERCEL",
        "SLACK",
        "FIGMA",
        "STRIPE"
    ];

    return(
        <section className="trusted">
            <p className="trusted_label">POWERING TEAMS AT</p>
            <div className="trusted_companies">
                {companies.map((company) => (<span key={company}>{company}</span>))}
            </div>
        </section>
    );
}

export default TrustedBy;