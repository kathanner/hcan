<h1>HCAN Data Dashboard</h1>
The data points displayed on the dashboard are populated from JSON files. These files are purposefully stored externally by region and category so updates can be made easily.
<h2>Updating the dashboard data</h2>
When new data are available, there are two methods for updating the JSON files.

<strong>Method 1. <a href="https://docs.google.com/spreadsheets/d/1Fu8wvaH2dYX3tfzBETkaeOHDT2i7hpRH9c4cQ7tFQ_c/edit?usp=sharing" target="_blank">Google Sheet</a></strong>
<ol>
  <li>Update the columns A-G</li>
  <li>Check the blue columns for data points in the most recent year</li>
  <ul>
    <li>If there is not data in associated with the indicator + location section, adjust the formula in Column K in the identified indicator rows only.</li>
    <li>Highlight these rows to run a find and replace</li>
    <li>Use the replace feature (with 'also search within formlas' checked)</li>
    <li>Find this formula in the highlighted rows only: '=iferror(if(J22=(year(NOW())-4),F22,if(D22=(year(NOW())-4),F22,"")),"")' and replace the integer in this string '(year(NOW())-4)' <br />note: This searches for the current year minus a number. For example, the current year is 2024 and the formula subtracts 4 from this to locate the year 2020 in the highlighted data.</li>
  </ul>
  <li>Export as a cvs and rename to 'kids_count_data.csv'</li>
  <li>Replace the file in this github repo 'kids_count_data.csv' with the new csv downloaded in step #3</li>
  <li>Commit the changes</li>
  <li>Run the jupyter notebook <a href="https://github.com/kathanner/hcan/blob/main/kc_data_json.ipynb">kc_data_json.ipynb</a> either on the cloud or locally</li>
  <li>Copy the JSON from each command block in the jupyter notebook file into the corresponding JSON files in this repo</li>
  <li>Commit the changes</li>
</ol>


<strong>Method 2. Manual JSON commits</strong>
<ol>
  <li>Find the correpsonding JSON file</li>
  <ul>
    <li>File naming conventions by category:</li>
    <table>
      <tr>
        <td width="50%">
    <ul>
      <li>Demographics | file name: data_dem[location].json</li>
      <ul>
        <li>Hawaiʻi: <a href="https://github.com/kathanner/hcan/blob/main/data_demHawaii.json">data_demHawaii.json</a></li>
        <li>Hawaiʻi County: <a href="https://github.com/kathanner/hcan/blob/main/data_demHawaiico.json">data_demHawaiico.json</a></li>
        <li>City & County of Honolulu: <a href="https://github.com/kathanner/hcan/blob/main/data_demHonolulu.json">data_demHonolulu.json</a></li>
        <li>Kauaʻi County: <a href="https://github.com/kathanner/hcan/blob/main/data_demKauai.json">data_demKauai.json</a></li>
        <li>Maui County: <a href="https://github.com/kathanner/hcan/blob/main/data_demMaui.json">data_demMaui.json</a></li>
      </ul>
    </ul>
        </td>
        <td>
          <img src="https://github.com/kathanner/hcan/blob/main/references/demographics.png" />
        </td>
      </tr>
      <tr>
        <td width="50%">    
    <ul>
      <li>Education | file name: data_ed[location].json</li>
      <ul>
        <li>Hawaiʻi: <a href="https://github.com/kathanner/hcan/blob/main/data_edHawaii.json">data_edHawaii.json</a></li>
        <li>Hawaiʻi County: <a href="https://github.com/kathanner/hcan/blob/main/data_edHawaiico.json">data_edHawaiico.json</a></li>
        <li>City & County of Honolulu: <a href="https://github.com/kathanner/hcan/blob/main/data_edHonolulu.json">data_edHonolulu.json</a></li>
        <li>Kauaʻi County: <a href="https://github.com/kathanner/hcan/blob/main/data_edKauai.json">data_edKauai.json</a></li>
        <li>Maui County: <a href="https://github.com/kathanner/hcan/blob/main/data_edMaui.json">data_edMaui.json</a></li>
      </ul>
    </ul>
          <td>
          <img src="https://github.com/kathanner/hcan/blob/main/references/education.png" />
        </td>
      </tr>
      <tr>
        <td width="50%">
    <ul>
      <li>Economic Well-Being | file name: data_ec[location].json</li>
      <ul>
        <li>Hawaiʻi: <a href="https://github.com/kathanner/hcan/blob/main/data_ecHawaii.json">data_ecHawaii.json</a></li>
        <li>Hawaiʻi County: <a href="https://github.com/kathanner/hcan/blob/main/data_ecHawaiico.json">data_ecHawaiico.json</a></li>
        <li>City & County of Honolulu: <a href="https://github.com/kathanner/hcan/blob/main/data_ecHonolulu.json">data_ecHonolulu.json</a></li>
        <li>Kauaʻi County: <a href="https://github.com/kathanner/hcan/blob/main/data_ecKauai.json">data_ecKauai.json</a></li>
        <li>Maui County: <a href="https://github.com/kathanner/hcan/blob/main/data_ecMaui.json">data_ecMaui.json</a></li>
      </ul>
    </ul>
        </td>
        <td>
          <img src="https://github.com/kathanner/hcan/blob/main/references/economic.png" />
        </td>
      </tr>
      <tr>
        <td width="50%">
    <ul>
      <li>Health and Safety | file name: data_he[location].json</li>
      <ul>
        <li>Hawaiʻi: <a href="https://github.com/kathanner/hcan/blob/main/data_heHawaii.json">data_heHawaii.json</a></li>
        <li>Hawaiʻi County: <a href="https://github.com/kathanner/hcan/blob/main/data_heHawaiico.json">data_heHawaiico.json</a></li>
        <li>City & County of Honolulu: <a href="https://github.com/kathanner/hcan/blob/main/data_heHonolulu.json">data_heHonolulu.json</a></li>
        <li>Kauaʻi County: <a href="https://github.com/kathanner/hcan/blob/main/data_heKauai.json">data_heKauai.json</a></li>
        <li>Maui County: <a href="https://github.com/kathanner/hcan/blob/main/data_heMaui.json">data_heMaui.json</a></li>
      </ul>
    </ul>
        </td>
        <td>
          <img src="https://github.com/kathanner/hcan/blob/main/references/healthandsafety.png" />
        </td>
      </tr>
    </table>
  </ul>
      </td>
      </tr>
  <li>Modify the variables</li>
  <li>Commit changes in GitHub</li>
</ol>
