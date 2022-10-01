'use strict';

function musicModel(sequelize, DataTypes) {
  return sequelize.define('Movies', {
    song: { type: DataTypes.STRING, required: true },
    artist: { type: DataTypes.STRING, required: true },
    genre: { type: DataTypes.ENUM('pop', 'rock', 'country', 'heavy metal', 'hip hop', 'jazz', 'classical', 'other'), required: true },
    year: { type: DataTypes.INTEGER, required: true },
  });
}

module.exports = musicModel;
