﻿using Promact.Oauth.Server.Models;
using System.Collections.Generic;


namespace Promact.Oauth.Server.Repository.ConsumerAppRepository
{
    public interface IConsumerAppReposiotry 
    {
        /// <summary>
        /// This method used for added Consumer apps and return primary key. -An
        /// </summary>
        /// <param name="aaps"></param>
        /// <returns></returns>
        int AddedConsumerApps(Apps aaps);

        /// <summary>
        /// This method used forget list of apps. -An
        /// </summary>
        /// <returns></returns>
        List<Apps> GetListOfApps();

        /// <summary>
        /// This method used fro get apps object by id. -An
        /// </summary>
        /// <param name="id">pass apps object primarykey</param>
        /// <returns></returns>
        Apps GetAppsObjectById(int id);

        /// <summary>
        /// This method used for update consumer apps and return primary key. -An
        /// </summary>
        /// <param name="apps"></param>
        /// <returns></returns>
        int UpdateConsumerApps(Apps consumerApps);
    }
}
