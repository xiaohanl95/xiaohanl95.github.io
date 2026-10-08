'use client';

import { useState } from 'react';
import { publications, type PublicationStatus, type Topic } from './publications';
import styles from './publications.module.css';

type TopicFilter = 'all' | Topic;

const topics: Record<TopicFilter, { label: string; question: string; caption: string }> = {
  all: {
    label: 'All topics',
    question: 'How do small particles shape our atmosphere?',
    caption: 'Connected questions about molecules, clouds, aerosol models, and climate intervention.',
  },
  molecular: {
    label: 'Molecular aerosol science',
    question: 'What changes when particles become very small?',
    caption: 'Water, organics, salts, and surfaces at the nanoscale.',
  },
  cloud: {
    label: 'Aerosol-cloud interactions',
    question: 'Which particles change a cloud?',
    caption: 'Connecting particle properties to cloud condensation nuclei, ice formation, and cloud responses.',
  },
  models: {
    label: 'Models & observations',
    question: 'What do models and observations reveal about atmospheric aerosols?',
    caption: 'Developing models and using observations to understand particle populations and their effects.',
  },
  climate: {
    label: 'Climate interventions',
    question: 'How might deliberate aerosol changes alter climate?',
    caption: 'Stratospheric aerosol injection and its climate consequences.',
  },
};

const topicOrder: TopicFilter[] = ['all', 'molecular', 'cloud', 'models', 'climate'];
const groups: { status: PublicationStatus; label: string }[] = [
  { status: 'published', label: 'Published' },
  { status: 'review', label: 'Under review' },
  { status: 'preparation', label: 'In preparation' },
];

function Authors({ text }: { text: string }) {
  return text.split(/(Li, X\.)/).map((part, index) =>
    part === 'Li, X.' ? <strong key={index}>{part}</strong> : part,
  );
}

export default function PublicationExplorer() {
  const [selectedTopic, setSelectedTopic] = useState<TopicFilter>('all');
  const topic = topics[selectedTopic];
  const matchingPapers = publications.filter(paper =>
    selectedTopic === 'all' || paper.topics.includes(selectedTopic),
  );

  return (
    <section className={`wrap ${styles.page}`} id="publications" aria-labelledby="publications-title">
      <div className={styles.pageHead}>
        <div>
          <h1 id="publications-title">Publications</h1>
          <p>Explore selected papers and manuscripts by topic.</p>
        </div>
        <a className={styles.fullRecord} href="https://scholar.google.com/citations?user=cPR5Lq4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
          Full record · Google Scholar <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className={styles.filters} role="group" aria-label="Filter publications by topic">
        {topicOrder.map(key => (
          <button key={key} className={styles.filter} type="button" data-topic={key}
            aria-pressed={selectedTopic === key} onClick={() => setSelectedTopic(key)}>
            {topics[key].label}
          </button>
        ))}
      </div>
      <p className={styles.srOnly} role="status">
        Showing {matchingPapers.length} publications and manuscripts: {topic.label.toLowerCase()}.
      </p>

      <div className={styles.researchView}>
        <aside className={styles.topicBanner} aria-labelledby="publication-topic-question">
          <p className={styles.topicLabel}>{topic.label}</p>
          <h2 id="publication-topic-question">{topic.question}</h2>
          <p className={styles.topicCaption}>{topic.caption}</p>
        </aside>
        <div className={styles.paperList}>
          {groups.map(group => {
            const papers = matchingPapers.filter(paper => paper.status === group.status);
            if (papers.length === 0) return null;
            return (
              <section key={group.status} className={styles.statusGroup}
                aria-labelledby={`publications-${group.status}`}>
                <h3 className={styles.groupTitle} id={`publications-${group.status}`}>{group.label}</h3>
                <ul>
                  {papers.map(paper => (
                    <li key={paper.id} className={styles.paper} data-paper-id={paper.id}>
                      <h4>
                        {paper.url
                          ? <a href={paper.url} target="_blank" rel="noopener noreferrer">{paper.title}</a>
                          : paper.title}
                      </h4>
                      <p className={styles.citation}>
                        <Authors text={paper.authors} />
                        {paper.journal && <> · <span className={styles.meta}>
                          {paper.year && <>{paper.year} · </>}{paper.journal}
                        </span></>}
                      </p>
                      <div className={styles.topicTags}>
                        {paper.topics.map(key => (
                          <button key={key} type="button" className={styles.topicTag}
                            aria-pressed={selectedTopic === key} aria-label={`Filter by topic: ${topics[key].label}`}
                            onClick={() => setSelectedTopic(key)}>
                            {topics[key].label}
                          </button>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
