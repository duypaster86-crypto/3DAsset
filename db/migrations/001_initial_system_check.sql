-- migrate:up
CREATE TABLE IF NOT EXISTS system_metadata (
  key VARCHAR(64) PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO system_metadata (key, value)
VALUES ('initialized_at', CURRENT_TIMESTAMP::text)
ON CONFLICT (key) DO NOTHING;

-- migrate:down
DROP TABLE IF EXISTS system_metadata;
