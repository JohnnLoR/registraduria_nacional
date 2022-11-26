package asyncTeam.pruebaSecurity.pruebaSecurity.repositorios;

import asyncTeam.pruebaSecurity.pruebaSecurity.modelos.Rol;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RepositorioRol extends MongoRepository<Rol, String> {
}
