package asyncTeam.pruebaSecurity.pruebaSecurity.repositorios;

import asyncTeam.pruebaSecurity.pruebaSecurity.modelos.Permiso;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface RepositorioPermiso extends MongoRepository<Permiso, String> {
    @Query("{'url':?0, 'metodo':?1}")
    public Permiso getPermiso(String url, String metodo);
}
