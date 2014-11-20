// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

module.exports = {
  'Compact and Clean Menu shows up' : function (client) {
    var waitTime = 10000,
        newDatabaseName = client.globals.testDatabaseName,
        baseUrl = client.globals.test_settings.launch_url;

    client
      .loginToGUI()
      .url(baseUrl)

      //navigate to 'Compact & Clean' view
      .clickWhenVisible('#dashboard-content a[href="#/database/' + newDatabaseName + '/_all_docs"]')
      .clickWhenVisible('#docLink_compact')
      .waitForElementVisible('#compact-db', waitTime, false)
      .waitForElementVisible('#cleanup-views', waitTime, false)
      .end();
  }
};
