import express from 'express';
import { pool } from './db.js';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(express.json())

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to sound_master!' });
});

const options = {
  origin: 'https://cofun.digital',
  }
import cors from 'cors';
app.use(cors(options))

app.get('/api/sounds/technical/spatial_context/:spatial_context', async (req, res) => {
  const { spatial_context } = req.params;
  const spatial_context_escape = spatial_context.toString().toLowerCase().replace(/[^a-zA-Z0-9_]/g, '');
  try {
    const sounds = await pool.query(`SELECT * FROM sound_technical WHERE spatial_context='${spatial_context_escape}'`)
    res.json(sounds.rows)
  } catch (err) {
    console.error(err)
  }
})

app.get('/api/sounds/technical', async (_, res) => {
  try {
    const sounds = await pool.query(`SELECT * FROM sound_technical`)
    res.json(sounds.rows)
  } catch (err) {
    console.error(err)
  }
})

app.get('/api/sounds/open', async (_, res) => {
  try {
    const sounds = await pool.query(`SELECT * FROM sound_open`)
    res.json(sounds.rows)
  } catch (err) {
    console.error(err)
  }
})

app.post('/api/sounds/technical', async (req, res) => {
  const { title, author, source, user_email, sound_source, rhytmic_scale, tempo_modulation, beat_types, tempo_range, tempo_complexity, spatial_context, enclosed_settings, open_air, natural_environments, date } = req.body;
  try {
    const id = uuidv4();
    const title_escape = title.toString().toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
    const author_escape =  author.toString().toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
    const sound = await pool.query('INSERT INTO sound_technical(id, title, author, source, user_email, sound_source, rhytmic_scale, tempo_modulation, beat_types, tempo_range, tempo_complexity, spatial_context, enclosed_settings, open_air, natural_environments, date)  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)',
      [id, title_escape, author_escape, source, user_email, sound_source, rhytmic_scale, tempo_modulation, beat_types, tempo_range, tempo_complexity, spatial_context, enclosed_settings, open_air, natural_environments, date]
    )
    res.json(sound)
  } catch (err) {
    console.error(err)
  }
})

app.post('/api/sounds/open', async (req, res) => {
  const { id, title, author, source, user_email, emotion, association, reflection, cultural_influence, uniqueness, technical_execution, niche_appeal, similar_artists, live_performance, narrative, aesthetic, stand_out, date } = req.body;
  try {
    const id = uuidv4();
    const title_escape = title.toString().toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
    const author_escape =  author.toString().toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
    const sound = await pool.query('INSERT INTO sound_open(id, title, author, source, user_email, emotion, association, reflection, cultural_influence, uniqueness, technical_execution, niche_appeal, similar_artists, live_performance, narrative, aesthetic, stand_out, date)  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)',
      [id, title_escape, author_escape, source, user_email, emotion, association, reflection, cultural_influence, uniqueness, technical_execution, niche_appeal, similar_artists, live_performance, narrative, aesthetic, stand_out, date]
    )
    res.json(sound)
  } catch (err) {
    console.error(err)
  }
})

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to socket-io!' });
});

const port = process.env.PORT || 3331;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
