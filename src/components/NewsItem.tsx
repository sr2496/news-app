import '../assets/NewsItem.css'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, publishedAt } = props;

  return (
    <div className="card h-100 border-0 shadow-sm news-card">
      {/* Image Section */}
      <div className="position-relative overflow-hidden">
        <img
          src={imageUrl || 'https://cdn.mos.cms.futurecdn.net/HA3njHCNNwWCCDLkyUJ9fD.jpg'}
          className="card-img-top"
          alt="news"
          style={{ height: '200px', objectFit: 'cover' }}
          loading="lazy"
        />
        {/* Overlay for Readability */}
        <div className="position-absolute bottom-0 start-0 w-100 h-100 bg-gradient-overlay"></div>
      </div>

      {/* Card Content */}
      <div className="card-body d-flex flex-column p-4">
        {/* Title */}
        <h5 className="card-title fw-bold text-truncate">{title || 'No Title Available'}</h5>

        {/* Author and Date */}
        <div className="d-flex align-items-center mb-3 text-muted small">
          <span className="me-3 d-flex align-items-center">
            <svg
              className="bi me-1"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
            {author || 'Unknown Author'}
          </span>
          <span className="d-flex align-items-center">
            <svg
              className="bi me-1"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H6.5A.5.5 0 0 1 6 .5zM5 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5zm0 1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 8h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z" />
            </svg>
            {new Date(publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
        </div>

        {/* Description */}
        <p className="card-text text-muted small flex-grow-1">
          {(description?.slice(0, 100) || 'No description available...') + (description?.length > 100 ? '...' : '')}
        </p>

        {/* Read More Button */}
        <a
          href={newsUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-sm mt-auto align-self-start gradient-btn"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}

export default NewsItem;