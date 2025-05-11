CREATE DATABASE sounds;

CREATE TABLE sound_technical (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(512),
  author VARCHAR(512),
  source VARCHAR(512),
  user_email VARCHAR(255),
  sound_source VARCHAR(30),
  rhytmic_scale VARCHAR(30),
  tempo_modulation VARCHAR(30),
  beat_types VARCHAR(30),
  tempo_range VARCHAR(30),
  tempo_complexity VARCHAR(30),
  spatial_context VARCHAR(30),
  enclosed_settings VARCHAR(30),
  open_air VARCHAR(30),
  natural_environments VARCHAR(30),
  date VARCHAR(300)
);

CREATE TABLE sound_open (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(512),
  author VARCHAR(512),
  source VARCHAR(512),
  user_email VARCHAR(255),
  emotion VARCHAR(500),
  association VARCHAR(512),
  reflection VARCHAR(512),
  cultural_influence VARCHAR(512),
  uniqueness VARCHAR(512),
  technical_execution VARCHAR(512),
  niche_appeal VARCHAR(512),
  similar_artists VARCHAR(512),
  live_performance VARCHAR(512),
  narrative VARCHAR(512),
  aesthetic VARCHAR(512),
  stand_out VARCHAR(512),
  date VARCHAR(300)
);


INSERT INTO sound_technical(id, title, author, source, user_email, rhytmic_scale, tempo_modulation, beat_types, tempo_range, tempo_complexity, spatial_context, enclosed_settings, open_air, natural_environments, date)
VALUES ('0', 'Joy', 'Isaac Hayes', NULL, 'syntia.birgele@gmail.com', 'macro', 'static_tempo', 'syncopation', 'medium', 'constant', 'enclosed_settings', 'studio', NULL, NULL, 'Thu Oct 10 2024 00:04:56 GMT+0200 (Central European Summer Time)');


CREATE TABLE users (
  email VARCHAR(255) PRIMARY KEY,
  hashed_password VARCHAR(255)
);