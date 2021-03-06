/*
 #
 # Copyright (c) 2018 nexB Inc. and others. All rights reserved.
 # https://nexb.com and https://github.com/nexB/scancode-toolkit/
 # The ScanCode software is licensed under the Apache License version 2.0.
 # AboutCode is a trademark of nexB Inc.
 #
 # You may not use this software except in compliance with the License.
 # You may obtain a copy of the License at: http://apache.org/licenses/LICENSE-2.0
 # Unless required by applicable law or agreed to in writing, software distributed
 # under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 # CONDITIONS OF ANY KIND, either express or implied. See the License for the
 # specific language governing permissions and limitations under the License.
 #
 */

const {jsonDataType} = require('./databaseUtils');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'licenses',
    {
      key: DataTypes.STRING,
      score: DataTypes.INTEGER,
      short_name: DataTypes.STRING,
      category: DataTypes.STRING,
      owner: DataTypes.STRING,
      homepage_url: DataTypes.STRING,
      text_url: DataTypes.STRING,
      reference_url: DataTypes.STRING,
      spdx_license_key: DataTypes.STRING,
      spdx_url: DataTypes.STRING,
      start_line: DataTypes.INTEGER,
      end_line: DataTypes.INTEGER,
      matched_rule: jsonDataType('matched_rule')
    },
    {
      timestamps: false
    });
};