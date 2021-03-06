/*
  This file is part of geneajs.
  geneajs is free software: you can redistribute it and/or modify
  it under the terms of the GNU Lesser General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  geneajs is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public License
  along with geneajs.  If not, see <http://www.gnu.org/licenses/>.
*/

var Note = require('./note');

var GedcomDate = function(dateString) {
  // TODO: Convert date
  this.dateString = dateString;
};

var ChangeDate = function(e) {
  this.date = new GedcomDate(e.date);
  this.time = e.time;
  this.notes = e.notes ? e.notes : [];
};

exports.GedcomDate = GedcomDate;