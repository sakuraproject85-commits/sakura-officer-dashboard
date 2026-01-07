INSERT INTO users_roles (name, api_key, role)
VALUES
  ('Demo Validator', 'qgr_demo_validator_key', 'validator')
ON CONFLICT (api_key) DO NOTHING;
