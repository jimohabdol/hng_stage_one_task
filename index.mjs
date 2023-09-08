import express from "express";
import moment from 'moment';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const github_file_url = process.env.GITHUB_FILE_URL || 'https://github.com/jimohabdol/hng_stage_one_task/blob/main/index.mjs';
const github_repo_url = process.env.GITHUB_REPO_URL || 'https://github.com/jimohabdol/hng_stage_one_task.git';

app.get('/api', (req, res) => {
  const slack_name = req.query.slack_name || 'example_name';
  const track = req.query.track || 'backend';
  const currentDay = moment().format('dddd');
  const utcTime = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');

  const response = {
    slack_name: slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: github_file_url,
    github_repo_url: github_repo_url,
    status_code: 200,
  };

  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
