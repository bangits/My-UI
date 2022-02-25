const STATUS_TYPES = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  EXPIRED: 'expired',
  BLOCKED: 'blocked',
  WARNING: 'warning',
  PRIMARY: 'primary'
} as const;

export default STATUS_TYPES;
