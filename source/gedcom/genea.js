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

var Indi = require('./indi').Indi;
var Events = require('./event');
var GedcomDate = require('./gedcomdate').GedcomDate;

Genea = function(ged) {
/*
  var ged = {
    head: [],
    people: [],
    families: [],
    submitter: [],
    notes: [],
    objects:[],
    submission: [],
    sources: [],
    repositories: [],
    xref_people_mapping: {},
    xref_families_mapping: {},
    xref_submitter_mapping: {},
    xref_notes_mapping: {},
    xref_objects_mapping: {},
    xref_sources_mapping: {}
  };
*/
  this.people = ged.people.map(function(indi) {
    var newPerson = new Indi();
    var object, object1, object2, object3, object4;

    Genea.setSingleValue('RESN', indi, newPerson, 'setRestrictionNotice');

    object = Genea.getTagObject('NAME', 'N', indi);
    if (object) {
      // TODO: add aditional information for names from gedcom
      object.forEach(function(object) {
        var pos1 = object.value.search(/\//);
        var name1 = null;
        var name2 = null;
        var name3 = null;
        if (pos1 === -1) {
          name1 = object.value;
        } else {
          var pos2 = object.value.substr(pos1 + 1).search(/\//);
          if(pos1 > 0) {
            name1 = object.value.substr(0, pos1 - 1);
          }
          name2 = object.value.substr(pos1 + 1, pos2);
          var pos3 = pos1 + pos2;
          if (pos3 + 2 < object.value.length) {
            name3 = object.value.substr(pos2 + 1);
          }
        }
        newPerson.addName({
          name1: name1,
          name2: name2,
          name3: name3
        });
      });
    }
    object = Genea.getTagObject('SEX', '1', indi);
    if (object) {
      if (object.value === 'F') {
        newPerson.setSex('female');
      } else if (object.value === 'M') {
        newPerson.setSex('male');
      } else {
        newPerson.setSex('undefined');
      }
    }
    var eventTags = [
      {tag: 'TYPE', f: 'setType'},
      {tag: 'DATE', f: 'setDate'},
      {tag: 'PLAC', f: 'setPlace'},
      {tag: 'AGNC', f: 'setAgency'},
      {tag: 'RELI', f: 'setReligion'},
      {tag: 'CAUS', f: 'setCause'},
      {tag: 'RESN', f: 'setRestrictionNotice'}
    ];

    Genea.setEvent('BIRT', indi, newPerson, eventTags.concat([
      {tag: 'FAMC', f: 'setFamc'}
    ]), 'birth', Events.BirthEvent);
    Genea.setEvent('CHR', indi, newPerson, eventTags.concat([
      {tag: 'FAMC', f: 'setFamc'}
    ]), 'christening', Events.ChristeningEvent);
    Genea.setEvent('DEAT', indi, newPerson,
      eventTags, 'death', Events.DeathEvent);
    Genea.setEvent('BURI', indi, newPerson,
      eventTags, 'burial', Events.BurialEvent);
    Genea.setEvent('CREM', indi, newPerson,
      eventTags, 'cremation', Events.CremationEvent);
    Genea.setEvent('ADOP', indi, newPerson, eventTags.concat([
      {tag: 'FAMC', f: 'setFamc', subtags: [
        {tag: 'ADOP', f: 'setAdoptedBy'}
      ]}
    ]), 'adoption', Events.AdoptionEvent);
    Genea.setEvent('BAPM', indi, newPerson,
      eventTags, 'baptism', Events.BaptismEvent);
    Genea.setEvent('BARM', indi, newPerson,
      eventTags, 'barmitzvah', Events.BarMitzvahEvent);
    Genea.setEvent('BASM', indi, newPerson,
      eventTags, 'basmitzvah', Events.BasMitzvahEvent);
    Genea.setEvent('BLES', indi, newPerson,
      eventTags, 'blessing', Events.BlesEvent);
    Genea.setEvent('CHRA', indi, newPerson,
      eventTags, 'adultchristening', Events.AdultChristeningEvent);
    Genea.setEvent('CONF', indi, newPerson,
      eventTags, 'confirmation', Events.ConfirmationEvent);
    Genea.setEvent('FCOM', indi, newPerson,
      eventTags, 'firstcommunion', Events.FirstCommunionEvent);
    Genea.setEvent('ORDN', indi, newPerson,
      eventTags, 'ordination', Events.OrdinationEvent);
    Genea.setEvent('NATU', indi, newPerson,
      eventTags, 'naturalization', Events.NaturalizationEvent);
    Genea.setEvent('EMIG', indi, newPerson,
      eventTags, 'emigration', Events.EmigrationEvent);
    Genea.setEvent('IMMI', indi, newPerson,
      eventTags, 'immigration', Events.ImmigrationEvent);
    Genea.setEvent('CENS', indi, newPerson,
      eventTags, 'census', Events.CensusEvent);
    Genea.setEvent('PROB', indi, newPerson,
      eventTags, 'probate', Events.ProbateEvent);
    Genea.setEvent('WILL', indi, newPerson,
      eventTags, 'will', Events.WillEvent);
    Genea.setEvent('GRAD', indi, newPerson,
      eventTags, 'graduation', Events.GradEvent);
    Genea.setEvent('RETI', indi, newPerson,
      eventTags, 'retirement', Events.RetiEvent);
    Genea.setEvent('EVEN', indi, newPerson,
      eventTags, 'event', Events.IndividualEvent);

    // console.log(JSON.stringify(newPerson));
    console.log(newPerson);
    return newPerson;
  });
};
Genea.setEvent = function(tag, object, person, subtags, type, event) {
  object = Genea.getTagObject(tag, 'N', object);
  if (object) {
    object.forEach(function(object) {
      var e = new event({_type: type});
      // if (!object.value) {
      if (object.data.length !== 0) {
        Genea.setMultipleValues(subtags, object, e);
      }
      person.addEvent(e);
    });
  }
};
Genea.setMultipleValues = function(tags, object, e) {
  var object1;
  tags.forEach(function(sub) {
    object1 = Genea.setSingleValue(sub.tag, object, e, sub.f);
    if (sub.subtags) {
      Genea.setMultipleValues(sub.subtags, object1, e);
    }
  });
};
Genea.setSingleValue = function(tag, object, e, f) {
  var object1 = Genea.getTagObject(tag, '1', object);
  if (object1) {
    e[f](object1.value);
  }
  return object1;
};
Genea.getTagObject = function(tag, type, tag_object) {
  var returnObject = [];
  tag_object.data.forEach(function(dat) {
    if (dat.tag === tag) {
      returnObject.push(dat);
    }
  });
  if (type === '1') {
    return returnObject[0];
  } else {
    return returnObject;
  }
};
exports.Genea = Genea;