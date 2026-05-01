import { Link } from "@tanstack/react-router";
import {
	ArrowBigUp,
	ArrowUpRight,
	Bookmark,
	Check,
	Copy,
	MessageSquare,
} from "lucide-react";
import { useState } from "react";

const SkillCard = (skillCard: SkillRecord) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(skillCard.installCommand);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 2000);
		} catch {
			setCopied(false);
		}
	};

	return (
		<article className="skill-card">
			<Link
				to="/"
				tabIndex={-1}
				aria-label={`Open ${skillCard.title}`}
				className="overlay"
			/>

			<div className="chrome">
				<div className="chrome-bar">
					<div className="lights">
						<div className="light red"></div>
						<div className="light amber"></div>
						<div className="light green"></div>
					</div>
					<div className="host">registry.sh</div>
				</div>
			</div>
			<div className="body">
				<div className="meta">
					<div className="author">
						<img src="/logo512.png" alt="author avatar" className="avatar" />
						<div className="author-copy">
							<p>Adrian</p>
							<p>
								{skillCard.createdAt
									? new Date(skillCard.createdAt).toLocaleDateString()
									: "Unknown date"}
							</p>
						</div>
					</div>
					<p className="category">{skillCard.category}</p>
				</div>
				<div className="summary">
					<Link to="/" className="title-link">
						<h3>{skillCard.title}</h3>
					</Link>
					<p>{skillCard.description}</p>
				</div>
				<div className="command">
					<div className="command-copy">
						<span>{">_"}</span>
						<p>{skillCard.installCommand}</p>
					</div>
					<button
						type="button"
						className="copy hover:cursor-pointer"
						onClick={handleCopy}
					>
						{copied ? <Check size={16} /> : <Copy size={16} />}
					</button>
				</div>
				<div className="footer">
					<div className="stats">
						<button type="button" className="upvote" disabled>
							<ArrowBigUp size={16} fill="currentColor" />
							<span>{skillCard.tags.length}</span>
						</button>
						<div className="comments">
							<MessageSquare size={14} />
							<span>{skillCard.authorEmail ? 1 : 0}</span>
						</div>
						<div className="actions">
							<Link
								to="/skills"
								className="open"
								title={`Open ${skillCard.title}`}
							>
								<span>Open</span>
								<ArrowUpRight size={14} />
							</Link>

							<button
								type="button"
								className="save"
								aria-label="Saved state"
								disabled
							>
								<Bookmark size={14} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default SkillCard;
